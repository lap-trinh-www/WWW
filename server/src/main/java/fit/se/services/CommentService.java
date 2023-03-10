package fit.se.services;

import java.sql.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fit.se.dto.CommentDTO;
import fit.se.models.Comment;
import fit.se.repository.CommentReponsitory;

@Service
public class CommentService {
  @Autowired
  private CommentReponsitory commentReponsitory;

  @Autowired
  private ModelMapper modelMapper;

  private CommentDTO convertEntityToDTO(Comment comment) {
    CommentDTO commentDTO = new CommentDTO();
    commentDTO = modelMapper.map(comment, CommentDTO.class);
    commentDTO.setUser_ID(comment.getUsers().getId());
    commentDTO.setRoom_ID(comment.getRooms().getRoom_ID());
    return commentDTO;

  }

  public List<CommentDTO> getAllComment() {
    return commentReponsitory.findAll().stream().map(this::convertEntityToDTO).collect(Collectors.toList());
  }

  public List<CommentDTO> getCommentByRoomID(String roomID) {
    return commentReponsitory.getCommentByRoomId(roomID).stream().map(this::convertEntityToDTO)
        .collect(Collectors.toList());
  }

  public List<CommentDTO> getCommentByUserID(String userID) {
    return commentReponsitory.getCommentByUserId(userID).stream().map(this::convertEntityToDTO)
        .collect(Collectors.toList());
  }

  public CommentDTO addComment(Comment comment) {
    CommentDTO commentDTO = convertEntityToDTO(comment);

    // if(!comment.getComment().trim().isBlank()){
    commentReponsitory.save(comment);
    // return convertEntityToDTO(comment);
    // }
    return null;
  }
}
