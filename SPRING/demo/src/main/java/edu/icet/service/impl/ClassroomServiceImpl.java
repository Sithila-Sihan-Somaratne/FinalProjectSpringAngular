package edu.icet.service.impl;

import edu.icet.dao.Classroom;
import edu.icet.dto.ClassroomObj;
import edu.icet.repository.ClassroomRepository;
import edu.icet.repository.NativeClassroomRepository;
import edu.icet.service.ClassroomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClassroomServiceImpl implements ClassroomService {
    @Autowired
    NativeClassroomRepository nativeClassroomRepository;

    @Autowired
    ClassroomRepository classroomRepository;

    @Override
    public int addClassroom(ClassroomObj classroomObj) {
        Classroom model = new Classroom();
        model.setBatchNumber(classroomObj.getBatchNumber());
        model.setColor(classroomObj.getColor());
        model.setNumbSeats(classroomObj.getNumbSeats());
        model.setNumbDesks(classroomObj.getNumbDesks());
        return nativeClassroomRepository.addClassroom(model);
    }

    @Override
    public List<ClassroomObj> getAllClassrooms() {
        Iterable<Classroom> studentList = classroomRepository.findAll();

        List<ClassroomObj> classroomObjModelList = new ArrayList<>();

        for (Classroom classroomDao : studentList) {

            classroomObjModelList.add(
                    ClassroomObj.builder()
                            .batchNumber(classroomDao.getBatchNumber())
                            .color(classroomDao.getColor())
                            .numbDesks(classroomDao.getNumbDesks())
                            .numbSeats(classroomDao.getNumbSeats())
                            .teacherList(classroomDao.getTeacherList())
                            .studentList(classroomDao.getStudentList())
                            .build()
            );
        }
        return classroomObjModelList;
    }

    @Override
    public boolean deleteClassroomByBatch(String batch) {
        return nativeClassroomRepository.deleteClassroomByBatch(batch);
    }

    @Override
    public boolean updateClassroomByBatch(ClassroomObj classroomObj) {
        return nativeClassroomRepository.updateClassroomByBatch(classroomObj);
    }
}
