package edu.icet.repository.impl;

import edu.icet.dao.Classroom;
import edu.icet.dao.Teacher;
import edu.icet.dto.TeacherObj;
import edu.icet.repository.ClassroomRepository;
import edu.icet.repository.NativeTeacherRepository;
import edu.icet.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class NativeTeacherRepositoryImpl implements NativeTeacherRepository {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    @Autowired
    ClassroomRepository classroomRepository;

    @Autowired
    TeacherRepository teacherRepository;

    @Override
    public int addTeacher(Teacher model) {
        System.out.println("Repository");
        Classroom classroom = model.getClassroom();
        if (classroom != null) {
            String batchNumber = classroom.getBatchNumber();
            int updateCount = jdbcTemplate.update(
                    "INSERT INTO teacher VALUES(?,?,?,?,?,?,?);",
                    model.getTeacherId(),
                    model.getContactNumber(),
                    model.getDob(),
                    model.getFullName(),
                    model.getInstitute(),
                    model.getSubject(),
                    batchNumber);
            if (updateCount > 0) {
                if (classroom.getTeacherList() == null) {
                    classroom.setTeacherList(new ArrayList<>());
                }
                classroom.getTeacherList().add(model);
            } else {
                if (classroom.getTeacherList() != null) {
                    classroom.getTeacherList().clear();
                }
            }
            System.out.println(classroom.getTeacherList());
            return updateCount;
        } else {
            return 0;
        }
    }

    @Override
    public boolean deleteTeacherById(Long id) {
        Optional<Teacher> studentOpt = teacherRepository.findById(id);
        if (studentOpt.isPresent()) {
            Teacher teacher = studentOpt.get();
            Classroom classroom = teacher.getClassroom();
            classroom.getTeacherList().remove(teacher);
            teacherRepository.delete(teacher);
            return true;
        } else {
            return false;
        }
    }


    @Override
    public boolean updateTeacherById(TeacherObj teacherObj) {
        Map<String, Object> params = new HashMap<>();
        params.put("id", teacherObj.getId());
        params.put("fullName", teacherObj.getFullName());
        params.put("institute", teacherObj.getInstitute());
        params.put("contactNumber", teacherObj.getContactNumber());
        params.put("dob", teacherObj.getDob());
        params.put("subject", teacherObj.getSubject());
        params.put("classroomId", teacherObj.getClassroom().getBatchNumber());

        boolean isUpdated = namedParameterJdbcTemplate.update(
                "UPDATE teacher SET full_name=:fullName, institute=:institute, contact_number=:contactNumber, dob=:dob, subject=:subject, classroom_id=:classroomId WHERE teacher_id=:id",
                params) > 0;

        if (isUpdated) {
            Classroom classroom = classroomRepository.findByBatchNumber(teacherObj.getClassroom().getBatchNumber());
            List<Teacher> teacherList = classroom.getTeacherList();

            for (Teacher teacher : teacherList) {
                if (teacher.getTeacherId().equals(teacherObj.getId())) {
                    teacher.setFullName(teacherObj.getFullName());
                    teacher.setInstitute(teacherObj.getInstitute());
                    teacher.setContactNumber(teacherObj.getContactNumber());
                    teacher.setDob(teacherObj.getDob());
                    teacher.setSubject(teacherObj.getSubject());
                }
            }

        }

        return isUpdated;
    }

}
