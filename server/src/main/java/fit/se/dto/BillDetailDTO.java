package fit.se.dto;

import java.sql.Date;

import lombok.Data;

@Data
public class BillDetailDTO {
    private String bill_id;
	private String room_id;
	private int childrenNum;
	private int adultNum;
	private Date checkIn;
	private Date checkOut;
}
