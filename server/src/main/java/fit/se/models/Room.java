package fit.se.models;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "rooms")
public class Room implements Serializable {
	@Id
	private String room_ID;
	private String roomName;
	private String imgaes;
	private int limitQuantity;
	private String vote;
	private int acreage;
	private String defaultService;
	private String description;

	@ManyToOne
	@JoinColumn(name = "type_ID")
	private RoomType roomType;

	@OneToMany(mappedBy = "rooms")
	private List<BillDetail> bills;

}
