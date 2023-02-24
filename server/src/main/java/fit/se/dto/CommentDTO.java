package fit.se.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CommentDTO {
  private String user_ID;
  private String room_ID;
  private Date date;
  private String comment;
  private int point;
}
