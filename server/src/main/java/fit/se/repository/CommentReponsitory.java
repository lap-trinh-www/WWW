package fit.se.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import fit.se.models.Comment;
import fit.se.models.CommentPK;

@Repository
public interface CommentReponsitory extends JpaRepository<Comment, CommentPK>{
    
    @Query(value = "Select * from Comments c where c.room_id = ?1", nativeQuery = true)
    List<Comment> getCommentByRoomId(String id);

    @Query(value = "Select * from Comments c where c.user_id = ?1", nativeQuery = true)
    List<Comment> getCommentByUserId(String id);

}
