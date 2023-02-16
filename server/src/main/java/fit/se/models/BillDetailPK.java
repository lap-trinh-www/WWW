package fit.se.models;

import java.io.Serializable;

import jakarta.persistence.Embeddable;

@Embeddable
public class BillDetailPK implements Serializable {

  private String bills;
  private String rooms;

  @Override
  public int hashCode() {
    final int prime = 31;
    int result = 1;
    result = prime * result + ((bills == null) ? 0 : bills.hashCode());
    result = prime * result + ((rooms == null) ? 0 : rooms.hashCode());
    return result;
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
    if (bills == null) {
      if (other.bills != null)
        return false;
    } else if (!bills.equals(other.bills))
      return false;
    if (rooms == null) {
      if (other.rooms != null)
        return false;
    } else if (!rooms.equals(other.rooms))
      return false;
    return true;
  }

}
