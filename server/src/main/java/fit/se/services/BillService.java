package fit.se.services;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fit.se.dto.BillDTO;
import fit.se.models.Bill;
import fit.se.repository.BillRepository;

@Service
public class BillService {
    @Autowired
    private BillRepository billRepository;

    @Autowired
    private ModelMapper modelMapper;

    /**
     * 
     * @param bill
     * @return BillDTO after convert billEntity to BillDTO
     */
    private BillDTO convertEntityToDTO(Bill bill) {
        BillDTO billDTO = new BillDTO();
        billDTO = modelMapper.map(bill, BillDTO.class);
        return billDTO;
    }

    public List<BillDTO> getBills() {
        return billRepository.findAll().stream().map(this::convertEntityToDTO).collect(Collectors.toList());
    }

    /**
     * Get all bill by bill_id from database
     * 
     * @param id
     * @return null if bill don't exits, BillDTO if get any bill by id
     */

    public BillDTO getBill(String id) {
        Bill bill = billRepository.findById(id).orElse(null);
        if (bill == null)
            return null;
        else
            return convertEntityToDTO(bill);
    }

    public BillDTO addBill(Bill newBill) {
        Bill bill = billRepository.findById(newBill.getBill_ID()).orElse(null);
        if (bill == null) {
            billRepository.save(bill);
            return convertEntityToDTO(newBill);
        } else
            return null;
    }
}
