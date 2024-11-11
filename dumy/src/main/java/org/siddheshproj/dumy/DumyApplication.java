package org.siddheshproj.dumy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DumyApplication {

	public static void main(String[] args) {
		//System.out.println(MyController.myMethod());
		System.out.println("RUNNING PROJECT");
		SpringApplication.run(DumyApplication.class, args);
	}

}
