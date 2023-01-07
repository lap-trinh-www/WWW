package entity;

import java.io.Serializable;
import java.util.Objects;

import jakarta.persistence.Embeddable;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Embeddable
public class BillDetailPK_Entity implements Serializable {
	private String bill_ID;
	private String room_ID;

	public BillDetailPK_Entity() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public int hashCode() {
		return Objects.hash(bill_ID, room_ID);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		BillDetailPK_Entity other = (BillDetailPK_Entity) obj;
		return Objects.equals(bill_ID, other.bill_ID) && Objects.equals(room_ID, other.room_ID);
	}

}
