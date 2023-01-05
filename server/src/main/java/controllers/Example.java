package controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Objects;

@Controller
public class Example {

  @PostMapping("/cards")
  @ResponseBody
  public String demo() {
    return "kuppng";
  }
}
