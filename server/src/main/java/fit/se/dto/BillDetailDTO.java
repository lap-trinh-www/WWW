package fit.se.dto;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class BillDetailDTO {
  private String bill_id;
  private String room_id;
  private int childrenNum;
  private int adultNum;
  private Date checkIn;
  private Date checkOut;
}
