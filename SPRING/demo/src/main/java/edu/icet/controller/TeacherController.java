package edu.icet.controller;

import edu.icet.dto.TeacherObj;
import edu.icet.service.TeacherService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/teacher")
@CrossOrigin
@Slf4j
public class TeacherController {
    @Autowired
    TeacherService teacherService;

    @PostMapping("addTeacher")
    public int addTeacher(@RequestBody TeacherObj teacherObj){
        return teacherService.addTeacher(teacherObj);
    }


    @GetMapping("/getAllTeachers")
    public List<TeacherObj> getAllTeachers(){
        return teacherService.getAllTeachers();
    }

    @DeleteMapping("/deleteTeacherById/{teacherId}")
    public boolean deleteTeacherById(@PathVariable Long teacherId){
        return teacherService.deleteTeacherById(teacherId);
    }

    @PutMapping("/updateTeacherById")
    public boolean updateTeacherById(@RequestBody TeacherObj teacherObj){
        return teacherService.updateTeacherById(teacherObj);
    }
}
