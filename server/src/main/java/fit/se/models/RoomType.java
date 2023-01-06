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
@Table(name = "roomType")
public class RoomType implements Serializable {
	@Id
	private String type_ID;
	private String typeName;
	private int quantityBed;

	@OneToMany(mappedBy = "roomType")
	private List<Room> rooms;

}
