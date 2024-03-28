package edu.icet.repository;

import edu.icet.dao.user_signup_login.User;

public interface NativeUserRepository {
    int createAccount(User model);

    boolean updatePwd(User model);
}
