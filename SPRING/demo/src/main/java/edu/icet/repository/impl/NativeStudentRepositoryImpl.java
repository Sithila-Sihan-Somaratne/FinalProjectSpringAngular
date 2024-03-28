package edu.icet.repository.impl;

import edu.icet.dao.Classroom;
import edu.icet.dao.Student;
import edu.icet.dto.StudentObj;
import edu.icet.repository.ClassroomRepository;
import edu.icet.repository.NativeStudentRepository;
import edu.icet.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.List;

@Repository
public class NativeStudentRepositoryImpl implements NativeStudentRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    @Autowired
    StudentRepository studentRepository;

    @Autowired
    ClassroomRepository classroomRepository;

    @Override
    public int addStudent(Student model) {
        Classroom classroom = model.getClassroom();
        if (classroom != null) {
            String batchNumber = classroom.getBatchNumber();
            int updateCount = jdbcTemplate.update(
                    "INSERT INTO student VALUES(?,?,?,?,?,?);",
                    model.getStudentId(),
                    model.getContactNumber(),
                    model.getDob(),
                    model.getFullName(),
                    model.getInstitute(),
                    batchNumber);
            if (updateCount > 0) {
                if (classroom.getStudentList() == null) {
                    classroom.setStudentList(new ArrayList<>());
                }
                classroom.getStudentList().add(model);
            } else {
                if (classroom.getStudentList() != null) {
                    classroom.getStudentList().clear();
                }
            }
            System.out.println(classroom.getStudentList());
            return updateCount;
        } else {
            return 0;
        }
    }

    @Override
    public boolean deleteStudentById(Long id) {
        Optional<Student> studentOpt = studentRepository.findById(id);
        if (studentOpt.isPresent()) {
            Student student = studentOpt.get();
            Classroom classroom = student.getClassroom();
            classroom.getStudentList().remove(student);
            studentRepository.delete(student);
            return true;
        } else {
            return false;
        }
    }


    @Override
    public boolean updateStudentById(StudentObj studentObj) {
        Map<String, Object> params = new HashMap<>();
        params.put("id", studentObj.getId());
        params.put("fullName", studentObj.getFullName());
        params.put("institute", studentObj.getInstitute());
        params.put("contactNumber", studentObj.getContactNumber());
        params.put("dob", studentObj.getDob());
        params.put("classroomId", studentObj.getClassroom().getBatchNumber());

        boolean isUpdated = namedParameterJdbcTemplate.update(
                "UPDATE student SET full_name=:fullName, institute=:institute, contact_number=:contactNumber, dob=:dob, classroom_id=:classroomId WHERE student_id=:id",
                params) > 0;

        if (isUpdated) {
            Classroom classroom = classroomRepository.findByBatchNumber(studentObj.getClassroom().getBatchNumber());
            List<Student> studentList = classroom.getStudentList();

            for (Student student : studentList) {
                if (student.getStudentId().equals(studentObj.getId())) {
                    student.setFullName(studentObj.getFullName());
                    student.setInstitute(studentObj.getInstitute());
                    student.setContactNumber(studentObj.getContactNumber());
                    student.setDob(studentObj.getDob());
                }
            }

        }

        return isUpdated;
    }



}