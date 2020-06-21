package com.greetgo.onlineschool.api;

import com.greetgo.onlineschool.dao.StudentMapper;
import com.greetgo.onlineschool.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class StudentController {
    @Autowired
    private StudentMapper studentMapper;

    @GetMapping("/all/student")
    public List<Student> getAll() {
        return studentMapper.getAll();
    }

    @PostMapping("/add/student")
    public void addStudent(@RequestBody Student student) {
        studentMapper.addStudent(student);
    }

    @DeleteMapping(path = "delete/student/{id}")
    public void deleteStudentById(@PathVariable("id") int id) {
        studentMapper.deleteStudentById(id);
    }

    @PutMapping(path = "/update/person/name/{id}")
    public void updateStudentNameById(@PathVariable("id") int id, @RequestBody String name) {
        studentMapper.updateStudentNameById(id, name);
    }

    @PutMapping(path = "/update/person/surname/{id}")
    public void updateStudentSurnameById(@PathVariable("id") int id, @RequestBody String surname) {
        studentMapper.updateStudentSurnameById(id, surname);
    }

    @PutMapping(path = "/update/person/gpa/{id}")
    public void updateStudentGpaById(@PathVariable("id") int id, @RequestBody float gpa) {
        studentMapper.updateStudentGpaById(id, gpa);
    }
}
