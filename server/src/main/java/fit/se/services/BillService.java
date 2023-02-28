package fit.se.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fit.se.dto.BillDTO;
import fit.se.models.Bill;
import fit.se.models.BillDetail;
import fit.se.models.User;
import fit.se.repository.BillRepository;

@Service
public class BillService {
  @Autowired
  private BillRepository billRepository;

  /**
   *
   * @param bill
   * @return BillDTO after convert billEntity to BillDTO
   */
  private BillDTO convertEntityToDTO(Bill bill) {
    BillDTO billDTO = new BillDTO();
    billDTO.setBill_ID(bill.getBill_ID());
    billDTO.setDate(bill.getDate());
    billDTO.setTotal(bill.getTotal());
    billDTO.setUser_ID(bill.getUser().getId());
    return billDTO;
  }
  public Bill convertDTOToEntity(BillDTO billDTO) {
    System.out.println(billDTO);
    Bill bill = new Bill();
    bill.setBill_ID(billDTO.getBill_ID());
    bill.setDate(billDTO.getDate());
    bill.setTotal(billDTO.getTotal());
    bill.setUser(new User(billDTO.getUser_ID()));
    bill.setRooms(new ArrayList<BillDetail>());
    
    return bill;
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

  public BillDTO addBill(BillDTO newBillDTO) {
    Bill bill = convertDTOToEntity(newBillDTO);
    System.out.println(bill);
    if ( billRepository.findById(bill.getBill_ID()).orElse(null)== null) {
      billRepository.save(bill);
      System.out.println(convertEntityToDTO(bill));
      return newBillDTO;
    } else
      return null;
  }
}
