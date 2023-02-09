package fit.se.models;

import java.util.Date;
import java.util.List;

import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "bills")
public class Bill {

	@Id
	private String bill_ID;
	private Date date;
	private long total;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	@OneToMany(mappedBy = "bills")
	private List<BillDetail> rooms;

}
