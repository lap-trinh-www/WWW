package controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import jakarta.servlet.http.HttpServletRequest;

@Controller
public class HelloController {
	@RequestMapping("/hello")
	@ResponseBody
	public String hello() {
		return "hello";
	}

	@RequestMapping("/dislay")
	public String dislay(HttpServletRequest request) {
		String name = request.getParameter("name");
		request.setAttribute("name", name);
		return "dislay";
	}

}
