package com.greetgo.onlineschool.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class User {
    private String username;
    private String password;

    public String getUsername() {
        return username;
    }

    public User(@JsonProperty("username") String username, @JsonProperty("password") String password) {
        this.username = username;
        this.password = password;
    }
}
