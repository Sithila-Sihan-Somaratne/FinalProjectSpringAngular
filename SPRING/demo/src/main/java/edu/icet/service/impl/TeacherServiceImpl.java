package edu.icet.service.impl;

import edu.icet.dao.Classroom;
import edu.icet.dao.Teacher;
import edu.icet.dto.ClassroomObj;
import edu.icet.dto.TeacherObj;
import edu.icet.repository.ClassroomRepository;
import edu.icet.repository.NativeTeacherRepository;
import edu.icet.repository.TeacherRepository;
import edu.icet.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TeacherServiceImpl implements TeacherService {
    @Autowired
    NativeTeacherRepository nativeTeacherRepository;

    @Autowired
    ClassroomRepository classroomRepository;

    @Autowired
    TeacherRepository teacherRepository;
    @Override
    public int addTeacher(TeacherObj teacherObj) {
        ClassroomObj obj = ClassroomObj.builder().batchNumber(teacherObj.getClassroom().getBatchNumber()).build();
        Teacher model = new Teacher();
        model.setFullName(teacherObj.getFullName());
        model.setInstitute(teacherObj.getInstitute());
        model.setDob(teacherObj.getDob());
        model.setContactNumber(teacherObj.getContactNumber());
        model.setSubject(teacherObj.getSubject());

        Classroom classroom = classroomRepository.findByBatchNumber(obj.getBatchNumber());

        if(classroom == null){
            return 0;
        }
        model.setClassroom(classroom);

        return nativeTeacherRepository.addTeacher(model);
    }

    @Override
    public List<TeacherObj> getAllTeachers() {
        Iterable<Teacher> studentsList = teacherRepository.findAll();
        List<TeacherObj> teacherObjModelList = new ArrayList<>();
        for(Teacher teacherDAO : studentsList){
            Classroom classroomDAO = teacherDAO.getClassroom();
            ClassroomObj classroomObj = ClassroomObj.builder()
                    .batchNumber(classroomDAO.getBatchNumber())
                    .color(classroomDAO.getColor())
                    .numbDesks(classroomDAO.getNumbDesks())
                    .numbSeats(classroomDAO.getNumbSeats())
                    .build();
            teacherObjModelList.add(
                    TeacherObj.builder()
                            .id(teacherDAO.getTeacherId())
                            .institute(teacherDAO.getInstitute())
                            .classroom(classroomObj)
                            .fullName(teacherDAO.getFullName())
                            .contactNumber(teacherDAO.getContactNumber())
                            .dob(teacherDAO.getDob())
                            .subject(teacherDAO.getSubject())
                            .build()
            );
        }
        return teacherObjModelList;
    }

    @Override
    public boolean deleteTeacherById(Long id) {
        return nativeTeacherRepository.deleteTeacherById(id);
    }

    @Override
    public boolean updateTeacherById(TeacherObj teacherObj) {
        return nativeTeacherRepository.updateTeacherById(teacherObj);
    }
}
