package com.greetgo.onlineschool;

import com.greetgo.onlineschool.model.Student;
import org.apache.ibatis.type.MappedTypes;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MappedTypes(Student.class)
@MapperScan("com.greetgo.onlineschool.dao")
@SpringBootApplication
public class OnlineSchoolApplication {
	public static void main(String[] args) {
		SpringApplication.run(OnlineSchoolApplication.class, args);
	}
}
