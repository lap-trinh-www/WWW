package fit.se.models;

import java.util.List;

import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "rooms")
public class Room {
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
