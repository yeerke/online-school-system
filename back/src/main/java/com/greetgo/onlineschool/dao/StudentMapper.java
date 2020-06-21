package com.greetgo.onlineschool.dao;

import com.greetgo.onlineschool.model.Student;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface StudentMapper {
    @Select("select * from student")
    List<Student> getAll();

    @Insert("insert into student(name, surname, gpa) values(#{name}, #{surname}, #{gpa})")
    @Options(useGeneratedKeys = true, keyProperty = "id", keyColumn = "id")
    void addStudent(Student student);

    @Delete("delete from student where id = #{id}")
    void deleteStudentById(Integer id);

    @Update("update student set name=#{name} where id = #{id}")
    void updateStudentNameById(int id, String name);

    @Update("update student set surname=#{surname} where id = #{id}")
    void updateStudentSurnameById(int id, String surname);

    @Update("update student set gpa=#{gpa} where id = #{id}")
    void updateStudentGpaById(int id, float gpa);
}
