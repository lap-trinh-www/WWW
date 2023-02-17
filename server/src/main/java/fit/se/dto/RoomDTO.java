package fit.se.dto;

import java.util.List;

import fit.se.models.BillDetail;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data

public class RoomDTO {
  private String room_ID;
  private String roomName;
  private List<String> images;
  private int limitQuantity;
  private int vote;
  private int acreage;
  private List<String> services;
  private String description;
  private double price;
  private List<BillDetail> bills;
  private String type_ID;

  @Override
  public String toString() {
    return "RoomDTO [room_ID=" + room_ID + ", roomName=" + roomName + ", images=" + images
        + ", limitQuantity=" + limitQuantity + ", vote=" + vote + ", acreage=" + acreage + ", services="
        + services + ", description=" + description + ", price=" + price + ", roomType=" + type_ID + "]";
  }

}
