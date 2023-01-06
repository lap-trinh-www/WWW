package fit.se.util;

import java.lang.reflect.Field;
import java.util.HashMap;

public abstract class HashMapConverter {
  public static HashMap<String, Object> toHashMap(Object object) {
    HashMap<String, Object> hashMap = new HashMap<>();
    for (Field field : object.getClass().getDeclaredFields()) {
      field.setAccessible(true);
      try {
        hashMap.put(field.getName(), field.get(object));
      } catch (IllegalAccessException e) {
        throw new RuntimeException(e);
      }
    }
    return hashMap;
  }

}
