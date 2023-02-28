package fit.se.models;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Entity
@Data
@AllArgsConstructor
@Getter
@Setter
@Table(name = "comments")
@IdClass(CommentPK.class)
public class Comment {
  @Id
  @ManyToOne
  @JoinColumn(name = "user_ID")
  private User users;

  @Id
  @ManyToOne
  @JoinColumn(name = "room_ID")
  private Room rooms;

  @Id
  private Date date;

  private String comment;
  private int point;
}
