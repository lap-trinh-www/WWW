package fit.se.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import fit.se.models.BillDetail;

@Repository
public interface BillDetailRepository extends JpaRepository<BillDetail, String> {

    @Query(value = "Select * from bill_details b where b.bill_id = ?1",nativeQuery = true)
    List<BillDetail> getBillDetailByBillID(String billId);
}
