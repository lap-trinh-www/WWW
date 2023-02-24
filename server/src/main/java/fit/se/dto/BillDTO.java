package fit.se.dto;

import java.sql.Date;
import java.util.List;

import fit.se.models.BillDetail;
import fit.se.models.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class BillDTO {
  private String bill_ID;
  private Date date;
  private long total;
  private User user;
  private List<BillDetail> billDetails;
}