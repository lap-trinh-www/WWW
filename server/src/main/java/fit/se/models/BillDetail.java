package fit.se.models;

import java.util.Date;

import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@IdClass(BillDetailPK.class)
@Table(name = "billDetails")
public class BillDetail {
	@Id
	@ManyToOne
	@JoinColumn(name = "bill_ID")
	private Bill bills;

	@Id
	@ManyToOne
	@JoinColumn(name = "room_ID")
	private Room rooms;

	private int childrenNum;
	private int adultNum;
	private Date checkIn;
	private Date checkOut;

}
