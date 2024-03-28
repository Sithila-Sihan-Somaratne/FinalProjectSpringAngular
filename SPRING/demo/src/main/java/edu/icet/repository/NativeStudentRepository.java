package edu.icet.repository;

import edu.icet.dao.Student;
import edu.icet.dto.StudentObj;

public interface NativeStudentRepository {
    int addStudent(Student model);

    boolean deleteStudentById(Long id);

    boolean updateStudentById(StudentObj studentObj);
}
