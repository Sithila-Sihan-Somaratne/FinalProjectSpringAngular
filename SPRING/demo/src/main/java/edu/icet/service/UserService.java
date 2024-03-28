package edu.icet.service;

import edu.icet.dto.user_signup_login.UserObj;
import org.springframework.http.ResponseEntity;

import java.util.Map;

public interface UserService {
    int createAccount(UserObj user);

    ResponseEntity<Map<String, String>> logIn(UserObj user);

    boolean forgotPwd(UserObj user);
}