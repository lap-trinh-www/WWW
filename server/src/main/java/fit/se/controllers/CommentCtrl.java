package fit.se.controllers;

import java.util.HashMap;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fit.se.dto.CommentDTO;
import fit.se.services.CommentService;
import fit.se.util.HashMapConverter;
import fit.se.util.ResponeMessage;

@RestController
@RequestMapping("/api/comments")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CommentCtrl {

  @Autowired
  private CommentService commentService;

  @GetMapping(value = {
      "", "/"
  })
  public ResponseEntity<ResponeMessage> getAllComment() {
    try {
      List<CommentDTO> commentDTOs = commentService.getAllComment();
      List<HashMap<String, Object>> commentMaps = HashMapConverter.toListOf(commentDTOs);

      return ResponseEntity.status(HttpStatus.OK).body(new ResponeMessage("ok", "success", commentMaps));
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
          .body(new ResponeMessage("error", "Not found", e.getMessage()));
    }
  }

  @PostMapping(value = {
      "", "/add"
  }, consumes = {
      "application/json",
      "application/x-www-form-urlencoded"
  })
  public ResponseEntity<ResponeMessage> addComment(@RequestBody CommentDTO newCommentDTO) {
    try {
       CommentDTO commentDTO =  commentService.addComment(newCommentDTO);

      return ResponseEntity.status(HttpStatus.OK).body(new ResponeMessage("ok", "success", commentDTO));
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
          .body(new ResponeMessage("error", "Not found", e.getMessage()));
    }
  }

  @GetMapping("/{roomId}")
  public ResponseEntity<ResponeMessage> getRoomById(@PathVariable String roomId) {
    try {
      List<CommentDTO> commentDTOs = commentService.getCommentByRoomID(roomId);

      List<HashMap<String, Object>> commentMaps = HashMapConverter.toListOf(commentDTOs);

      return ResponseEntity.status(HttpStatus.OK).body(new ResponeMessage("ok", "success", commentMaps));
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
          .body(new ResponeMessage("error", "Not found", e.getMessage()));
    }
  }
}
