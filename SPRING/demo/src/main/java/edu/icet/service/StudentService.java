package edu.icet.service;

import edu.icet.dto.StudentObj;

import java.util.List;

public interface StudentService {
    int addStudent(StudentObj student);

    List<StudentObj> getAllStudents();

    boolean deleteStudentById(Long id);

    boolean updateStudentById(StudentObj studentObj);
}
