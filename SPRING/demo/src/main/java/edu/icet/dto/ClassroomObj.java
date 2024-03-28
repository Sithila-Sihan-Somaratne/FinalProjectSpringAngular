package edu.icet.dto;

import edu.icet.dao.Student;
import edu.icet.dao.Teacher;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ClassroomObj {
    private String batchNumber;
    private String color;
    private int numbDesks;
    private int numbSeats;
    private List<Teacher> teacherList;
    private List<Student> studentList;
}
