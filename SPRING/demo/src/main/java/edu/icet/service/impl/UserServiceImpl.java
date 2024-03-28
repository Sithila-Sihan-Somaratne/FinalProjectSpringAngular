package edu.icet.service.impl;

import edu.icet.dao.user_signup_login.User;
import edu.icet.dto.user_signup_login.UserObj;
import edu.icet.repository.NativeUserRepository;
import edu.icet.repository.UserRepository;
import edu.icet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    NativeUserRepository nativeUserRepository;
    @Autowired
    UserRepository userRepository;
    @Override
    public int createAccount(UserObj user) {
        String pwdtoMD5 = getMd5Hash(user.getPwd());
        User model = new User();
        model.setName(user.getName());
        model.setEmail(user.getEmail());
        model.setContactNumber(user.getContactNumber());
        model.setPwd(pwdtoMD5);
        return nativeUserRepository.createAccount(model);
    }

    @Override
    public ResponseEntity<Map<String, String>> logIn(UserObj user) {

        String pwdtomd5Hash = getMd5Hash(user.getPwd());

        Optional<User> optionalUser = userRepository.findById(user.getName());

        Map<String, String> response = new HashMap<>();

        if (optionalUser.isEmpty()) {
            response.put("message", "User doesn't exist");
            return ResponseEntity.ok(response);
        }

        User existingUser = optionalUser.get();

        if (!existingUser.getPwd().equals(pwdtomd5Hash)){
            response.put("message", "Password is wrong");
            return ResponseEntity.ok(response);
        }

        response.put("message", "Log in has been done successfully!");
        return ResponseEntity.ok(response);
    }

    @Override
    public boolean forgotPwd(UserObj user) {
        Optional<User> optionalUser = userRepository.findById(user.getName());
        if (optionalUser.isEmpty()) {
            return false;
        }
        User existingUser = optionalUser.get();
        if (!existingUser.getEmail().equals(user.getEmail())){
            return false;
        }
        String pwdToMD5 = getMd5Hash(user.getPwd());
        User model = new User();
        model.setName(user.getName());
        model.setPwd(pwdToMD5);
        return nativeUserRepository.updatePwd(model);
    }

    public String getMd5Hash(String input){
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] messageDigest = md.digest(input.getBytes());
            BigInteger no = new BigInteger(1, messageDigest);
            StringBuilder hashtext = new StringBuilder(no.toString(16));
            while (hashtext.length() < 32)
            {
                hashtext.insert(0, "0");
            }
            return hashtext.toString();
        } catch (NoSuchAlgorithmException e) {
            System.err.println("OH NO! THERE'S AN EXCEPTION: "+e);
        }
        return "";
    }
}
