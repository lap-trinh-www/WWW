package fit.se.models;

import java.io.Serializable;
import java.util.Date;

import jakarta.persistence.Embeddable;

@Embeddable
public class CommentPK implements Serializable{
  
    private String users;

    private String rooms;

    private Date date;

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((users == null) ? 0 : users.hashCode());
        result = prime * result + ((rooms == null) ? 0 : rooms.hashCode());
        result = prime * result + ((date == null) ? 0 : date.hashCode());
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
        CommentPK other = (CommentPK) obj;
        if (users == null) {
            if (other.users != null)
                return false;
        } else if (!users.equals(other.users))
            return false;
        if (rooms == null) {
            if (other.rooms != null)
                return false;
        } else if (!rooms.equals(other.rooms))
            return false;
        if (date == null) {
            if (other.date != null)
                return false;
        } else if (!date.equals(other.date))
            return false;
        return true;
    }

    
}
