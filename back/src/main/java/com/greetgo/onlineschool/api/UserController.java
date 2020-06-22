package com.greetgo.onlineschool.api;

import com.greetgo.onlineschool.dao.UserMapper;
import com.greetgo.onlineschool.model.User;
import org.apache.tomcat.util.json.JSONParser;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
    UserMapper userMapper;

    @GetMapping(path = "/login/{username}")
    public List<String> login(@PathVariable("username") String username) {
        return userMapper.login(username);
    }

    @PostMapping("/registration")
    public boolean register(@RequestBody User user) {
        if (userMapper.hasUser(user.getUsername()).size() == 1) return false;
        userMapper.register(user);
        return true;
    }
}
