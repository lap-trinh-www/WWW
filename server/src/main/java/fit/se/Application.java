package fit.se;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = { "fit.se.controllers", "fit.se.models", "fit.se.services",
		"fit.se.repository", "fit.se.util", "fit.se.config", "fit.se.dto" })
public class Application {
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
