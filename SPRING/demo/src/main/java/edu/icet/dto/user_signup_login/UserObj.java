package edu.icet.dto.user_signup_login;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserObj {
    private String name;
    private String email;
    private String contactNumber;
    private String pwd;
}
