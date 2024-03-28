package edu.icet.repository;

import edu.icet.dao.Classroom;
import edu.icet.dto.ClassroomObj;

public interface NativeClassroomRepository {
    int addClassroom(Classroom model);

    boolean deleteClassroomByBatch(String batch);

    boolean updateClassroomByBatch(ClassroomObj classroomObj);
}
