package fit.se.dto;

import java.sql.Date;
import java.util.List;

import fit.se.models.BillDetail;
import lombok.Data;

@Data
public class BillDTO {
  private String bill_ID;
  private Date date;
  private long total;
  private String user_id;
  private List<BillDetail> rooms;
}
