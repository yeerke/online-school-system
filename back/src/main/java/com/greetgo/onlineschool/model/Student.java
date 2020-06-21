package com.greetgo.onlineschool.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Random;

public class Student {
    private String name;
    private String surname;
    private Integer id;
    private Float gpa;

    public Student(@JsonProperty("name") String name, @JsonProperty("surname") String surname, @JsonProperty("gpa") Float gpa) {
        this.name = name;
        this.surname = surname;
        this.gpa = gpa;
    }

    public Student(Integer id, String name, String surname, Float gpa) {
        this.name = name;
        this.surname = surname;
        this.gpa = gpa;
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Float getGpa() {
        return gpa;
    }

    public void setGpa(Float gpa) {
        this.gpa = gpa;
    }
}
