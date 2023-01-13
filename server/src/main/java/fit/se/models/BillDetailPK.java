package fit.se.models;

import java.io.Serializable;
import java.util.Objects;

import jakarta.persistence.*;

@Embeddable
public class BillDetailPK implements Serializable {
	/**
	 *
	 */
	private static final long serialVersionUID = 1L;
	private String bills;
	private String rooms;

	public BillDetailPK() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public int hashCode() {
		return Objects.hash(bills, rooms);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		BillDetailPK other = (BillDetailPK) obj;
		return Objects.equals(bills, other.bills) && Objects.equals(rooms, other.rooms);
	}

}
