package fit.se.models;

import java.util.List;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "rooms")
public class Room {
	@Id
	private String room_ID;
	private String roomName;
	@ElementCollection
	@CollectionTable(name = "images", joinColumns = @JoinColumn(name = "room_ID"))
	@Column(name = "image", nullable = false)
	private List<String> images;
	private int limitQuantity;
	private int vote;
	private int acreage;
	@ElementCollection
	@CollectionTable(name = "services", joinColumns = @JoinColumn(name = "room_ID"))
	@Column(name = "service", nullable = false)
	private List<String> services;
	private String description;
	private double price;

	@ManyToOne
	@JoinColumn(name = "type_ID")
	private RoomType roomType;

	@OneToMany(mappedBy = "rooms")
	private List<BillDetail> bills;

}
