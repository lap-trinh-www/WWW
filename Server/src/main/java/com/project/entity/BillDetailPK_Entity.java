package com.project.entity;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Embeddable;

@Embeddable
public class BillDetailPK_Entity implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String bills;
	private String rooms;

	public BillDetailPK_Entity() {
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
		BillDetailPK_Entity other = (BillDetailPK_Entity) obj;
		return Objects.equals(bills, other.bills) && Objects.equals(rooms, other.rooms);
	}

}
