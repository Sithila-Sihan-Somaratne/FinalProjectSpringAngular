package edu.icet.repository.impl;

import edu.icet.dao.user_signup_login.User;
import edu.icet.repository.NativeUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;

@Repository
public class NativeUserRepositoryImpl implements NativeUserRepository {
    @Autowired
    JdbcTemplate jdbcTemplate;
    @Autowired
    NamedParameterJdbcTemplate namedParameterJdbcTemplate;


    @Override
    public int createAccount(User model) {
        return jdbcTemplate.update(
                "INSERT INTO user VALUES(?,?,?,?);",
                model.getName(),
                model.getContactNumber(),
                model.getEmail(),
                model.getPwd());
    }

    @Override
    public boolean updatePwd(User model) {
        Map<String, Object> params = new HashMap<>();
        params.put("name", model.getName());
        params.put("pwd", model.getPwd());

        return namedParameterJdbcTemplate.update(
                "UPDATE user SET pwd=:pwd WHERE name=:name",
                params) > 0;
    }
}
