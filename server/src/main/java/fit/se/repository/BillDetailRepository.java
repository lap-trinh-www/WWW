package fit.se.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import fit.se.models.BillDetail;
import fit.se.models.BillDetailPK;

@Repository
public interface BillDetailRepository extends JpaRepository<BillDetail, BillDetailPK> {

  @Query(value = "Select * from bill_details b where b.bill_id = ?1", nativeQuery = true)
  List<BillDetail> getBillDetailByBillID(String billId);

  @Query(value = "Select * from bill_details b where b.bill_id = ?1 and b.room_id = ?2", nativeQuery = true)
  BillDetail getBillDetail(String billId, String roomID);

}
