package fit.se.models;

import java.io.Serializable;
import java.util.Date;

import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@IdClass(BillDetailPK.class)
@Table(name = "billDetails")
public class BillDetail implements Serializable {
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
