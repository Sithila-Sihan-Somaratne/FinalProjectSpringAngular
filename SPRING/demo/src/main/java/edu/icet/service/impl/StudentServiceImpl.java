package edu.icet.service.impl;

import edu.icet.dao.Classroom;
import edu.icet.dao.Student;
import edu.icet.dto.ClassroomObj;
import edu.icet.dto.StudentObj;
import edu.icet.repository.ClassroomRepository;
import edu.icet.repository.NativeStudentRepository;
import edu.icet.repository.StudentRepository;
import edu.icet.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class StudentServiceImpl implements StudentService {
    @Autowired
    NativeStudentRepository nativeStudentRepository;

    @Autowired
    ClassroomRepository classroomRepository;

    @Autowired
    StudentRepository studentRepository;
    @Override
    public int addStudent(StudentObj student) {
        ClassroomObj obj = ClassroomObj.builder().batchNumber(student.getClassroom().getBatchNumber()).build();
        Student model = new Student();
        model.setFullName(student.getFullName());
        model.setInstitute(student.getInstitute());
        model.setDob(student.getDob());
        model.setContactNumber(student.getContactNumber());

        Classroom classroom = classroomRepository.findByBatchNumber(obj.getBatchNumber());

        if(classroom == null){
            return 0;
        }
        model.setClassroom(classroom);

        return nativeStudentRepository.addStudent(model);
    }

    @Override
    public List<StudentObj> getAllStudents() {
        Iterable<Student> studentsList = studentRepository.findAll();
        List<StudentObj> studentObjModelList = new ArrayList<>();
        for(Student studentDAO : studentsList){
            Classroom classroomDAO = studentDAO.getClassroom();
            ClassroomObj classroomObj = ClassroomObj.builder()
                    .batchNumber(classroomDAO.getBatchNumber())
                    .color(classroomDAO.getColor())
                    .numbDesks(classroomDAO.getNumbDesks())
                    .numbSeats(classroomDAO.getNumbSeats())
                    .build();
            studentObjModelList.add(
                    StudentObj.builder()
                            .id(studentDAO.getStudentId())
                            .institute(studentDAO.getInstitute())
                            .classroom(classroomObj)
                            .fullName(studentDAO.getFullName())
                            .contactNumber(studentDAO.getContactNumber())
                            .dob(studentDAO.getDob())
                            .build()
            );
        }
        return studentObjModelList;
    }

    @Override
    public boolean deleteStudentById(Long id) {
        return nativeStudentRepository.deleteStudentById(id);
    }

    @Override
    public boolean updateStudentById(StudentObj studentObj) {
        return nativeStudentRepository.updateStudentById(studentObj);
    }


}
