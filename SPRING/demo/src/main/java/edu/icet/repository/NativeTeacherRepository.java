package edu.icet.repository;

import edu.icet.dao.Teacher;
import edu.icet.dto.TeacherObj;

public interface NativeTeacherRepository {
    int addTeacher(Teacher model);

    boolean deleteTeacherById(Long id);

    boolean updateTeacherById(TeacherObj teacherObj);
}
