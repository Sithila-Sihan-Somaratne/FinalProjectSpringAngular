package edu.icet.repository.impl;

import edu.icet.dao.Classroom;
import edu.icet.dto.ClassroomObj;
import edu.icet.repository.NativeClassroomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@Repository
public class NativeClassroomRepositoryImpl implements NativeClassroomRepository {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    NamedParameterJdbcTemplate namedParameterJdbcTemplate;
    @Override
    public int addClassroom(Classroom model) {
        return jdbcTemplate.update(
                "INSERT INTO classroom VALUES(?,?,?,?);",
                model.getBatchNumber(),
                model.getColor(),
                model.getNumbDesks(),
                model.getNumbSeats());
    }

    @Override
    public boolean deleteClassroomByBatch(String batch) {
        return namedParameterJdbcTemplate.update(
                "DELETE FROM classroom WHERE batch_number=:batchNumber",
                Collections.singletonMap("batchNumber", batch)) > 0;
    }

    @Override
    public boolean updateClassroomByBatch(ClassroomObj classroomObj) {
        Map<String, Object> params = new HashMap<>();
        params.put("batchNumber", classroomObj.getBatchNumber());
        params.put("color", classroomObj.getColor());
        params.put("numbDesks", classroomObj.getNumbDesks());
        params.put("numbSeats", classroomObj.getNumbSeats());

        return namedParameterJdbcTemplate.update(
                "UPDATE classroom SET color=:color, numb_desks=:numbDesks, numb_seats=:numbSeats WHERE batch_number=:batchNumber",
                params) > 0;
    }
}
