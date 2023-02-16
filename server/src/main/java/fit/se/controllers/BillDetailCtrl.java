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

import fit.se.dto.BillDetailDTO;
import fit.se.models.BillDetail;
import fit.se.services.BillDetailService;
import fit.se.util.HashMapConverter;
import fit.se.util.ResponeMessage;



@RestController
@RequestMapping("/api/billDetails")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class BillDetailCtrl {
    @Autowired
    private BillDetailService billDetailService;

    @GetMapping(value = { "", "/" })
    public ResponseEntity<ResponeMessage> getBills() {
        try {
            List<BillDetailDTO> billDetailDTOs = billDetailService.getBillDetails();
            List<Map<String, Object>> billDetailMaps = new ArrayList<>();

            for (BillDetailDTO billDetailDTO : billDetailDTOs) {
                HashMap<String, Object> response = HashMapConverter.toHashMap(billDetailDTO);
                billDetailMaps.add(response);
            }
            return ResponseEntity.status(HttpStatus.OK).body(new ResponeMessage("ok", "success", billDetailMaps));
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
    public ResponseEntity<ResponeMessage> addRoom(@RequestBody BillDetail billDetail) {

        try {
            BillDetailDTO billDetailDTO = billDetailService.addBillDetail(billDetail);

            return ResponseEntity.status(HttpStatus.OK).body(new ResponeMessage("ok", "success", billDetailDTO));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ResponeMessage("error", "Not found", e.getMessage()));
        }
    }

    @GetMapping("/{roomId}")
  public ResponseEntity<ResponeMessage> getRoomById(@PathVariable String billId) {
    try {
      List<BillDetailDTO> billDetailDTOs = billDetailService.getBillDetailByBillId(billId);

      
      return ResponseEntity.status(HttpStatus.OK).body(new ResponeMessage("ok", "success", billDetailDTOs));
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
          .body(new ResponeMessage("error", "Not found", e.getMessage()));
    }
  }
}
