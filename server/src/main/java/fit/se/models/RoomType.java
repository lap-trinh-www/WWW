package fit.se.models;

import java.util.List;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "roomType")
public class RoomType {
	@Id
	private String type_ID;
	private String typeName;
	private String type;

	@OneToMany(mappedBy = "roomType")
	private List<Room> rooms;

	public RoomType(String type_ID) {
		this.type_ID = type_ID;
	}
	
}
