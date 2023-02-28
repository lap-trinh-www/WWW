package fit.se.dto;

import java.util.Date;

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
  private String user_ID;
}