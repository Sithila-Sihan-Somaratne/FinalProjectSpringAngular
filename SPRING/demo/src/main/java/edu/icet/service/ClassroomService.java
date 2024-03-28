package edu.icet.service;

import edu.icet.dto.ClassroomObj;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ClassroomService {
    int addClassroom(ClassroomObj classroomObj);

    List<ClassroomObj> getAllClassrooms();

    boolean deleteClassroomByBatch(String batch);

    boolean updateClassroomByBatch(ClassroomObj classroomObj);
}
