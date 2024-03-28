package edu.icet.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StudentObj {
    private Long id;
    private String fullName;
    private String institute;
    private ClassroomObj classroom;
    private String dob;
    private String contactNumber;
}
