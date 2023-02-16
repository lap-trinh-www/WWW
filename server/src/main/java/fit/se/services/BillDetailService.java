package fit.se.services;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fit.se.dto.BillDetailDTO;
import fit.se.models.BillDetail;
import fit.se.repository.BillDetailRepository;

@Service
public class BillDetailService {

    @Autowired
    private BillDetailRepository billDetailRepository;

    @Autowired
    private ModelMapper modelMapper;

    private BillDetailDTO convertEntityToDTO(BillDetail billDetail) {
        BillDetailDTO billDetailDTO = new BillDetailDTO();
        billDetailDTO = modelMapper.map(billDetail, BillDetailDTO.class);
        return billDetailDTO;
    }
    public List<BillDetailDTO> getBillDetails() {
        return billDetailRepository.findAll().stream().map(this::convertEntityToDTO).collect(Collectors.toList());
    }
    public List<BillDetailDTO> getBillDetailByBillId(String billId){
        List<BillDetailDTO> billDetailDTOs = billDetailRepository.getBillDetailByBillID(billId).stream().map(this::convertEntityToDTO).collect(Collectors.toList());
        return billDetailDTOs;
    }
    public BillDetailDTO addBillDetail(BillDetail newBillDetail){
        BillDetail billDetail = billDetailRepository.findById(newBillDetail.getBills().getBill_ID()).orElse(null);
        if(billDetail != null){
            billDetailRepository.save(billDetail);
            return convertEntityToDTO(newBillDetail);
        }
        else
            return null;
    }  

}
