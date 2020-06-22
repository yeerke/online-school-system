package com.greetgo.onlineschool.dao;

import com.greetgo.onlineschool.model.User;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface UserMapper {
    @Select("select password from users where username = #{username}")
    List<String> login(String username);

    @Select("select * from users where username = #{username}")
    List<User> hasUser(String username);

    @Insert("insert into users(username, password) values(#{username}, #{password})")
    @Options(useGeneratedKeys = true, keyProperty = "username", keyColumn = "username")
    void register(User user);
}
