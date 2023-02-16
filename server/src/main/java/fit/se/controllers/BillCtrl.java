package fit.se.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fit.se.dto.BillDTO;
import fit.se.models.Bill;
import fit.se.services.BillService;
import fit.se.util.HashMapConverter;
import fit.se.util.ResponeMessage;

@RestController
@RequestMapping("/api/bills")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class BillCtrl {

    @Autowired
    private BillService billService;

    @GetMapping(value = { "", "/" })
    public ResponseEntity<ResponeMessage> getBills() {
        try {
            List<BillDTO> billDTOs = billService.getBills();
            List<Map<String, Object>> billMaps = new ArrayList<>();

            for (BillDTO billDTO : billDTOs) {
                HashMap<String, Object> response = HashMapConverter.toHashMap(billDTO);
                response.remove("roooms");
                billMaps.add(response);
            }
            return ResponseEntity.status(HttpStatus.OK).body(new ResponeMessage("ok", "success", billMaps));
        } catch (Exception e) {
            // TODO: handle exception
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PostMapping(value = {
            "", "/add"
    }, consumes = {
            "application/json",
            "application/x-www-form-urlencoded"
    })
    public ResponseEntity<ResponeMessage> addRoom(@RequestBody Bill bill) {

        try {
            billService.addBill(bill);

            return ResponseEntity.status(HttpStatus.OK).body(new ResponeMessage("ok", "success", null));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ResponeMessage("error", "Not found", e.getMessage()));
        }
    }

    @GetMapping("/{roomId}")
  public ResponseEntity<ResponeMessage> getRoomById(@PathVariable String billId) {
    try {
      BillDTO billDTO = billService.getBill(billId);

      if (billDTO == null) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
      }
      HashMap<String, Object> response = HashMapConverter.toHashMap(billDTO);
      response.remove("rooms");
      return ResponseEntity.status(HttpStatus.OK).body(new ResponeMessage("ok", "success", response));
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
          .body(new ResponeMessage("error", "Not found", e.getMessage()));
    }
  }
}
