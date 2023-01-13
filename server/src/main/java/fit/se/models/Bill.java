package fit.se.models;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "bills")
public class Bill implements Serializable {

	@Id
	private String bill_ID;
	private Date date;
	private long total;

	@ManyToOne
	@JoinColumn(name = "user_ID", columnDefinition = "nvarchar(20)")
	private User user;

	@OneToMany(mappedBy = "bills")
	private List<BillDetail> rooms;

}
