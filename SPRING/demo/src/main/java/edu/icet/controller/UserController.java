package edu.icet.controller;

import edu.icet.dto.user_signup_login.UserObj;
import edu.icet.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/user")
@CrossOrigin
@Slf4j
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/createAccount")
    public int createAccount(@RequestBody UserObj user){
        return userService.createAccount(user);
    }

    @PostMapping("/logIn")
    public ResponseEntity<Map<String,String>> logIn(@RequestBody UserObj user){
        return userService.logIn(user);
    }

    @PostMapping("/forgot-pwd")
    public boolean forgotPwd(@RequestBody UserObj user){return userService.forgotPwd(user);}
}
