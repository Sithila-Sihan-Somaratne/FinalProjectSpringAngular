package edu.icet.service;

import edu.icet.dto.TeacherObj;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TeacherService {
    int addTeacher(TeacherObj teacherObj);

    List<TeacherObj> getAllTeachers();

    boolean deleteTeacherById(Long id);

    boolean updateTeacherById(TeacherObj teacherObj);
}
