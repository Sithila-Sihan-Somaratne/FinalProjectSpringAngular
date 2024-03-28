package edu.icet.controller;

import edu.icet.dto.StudentObj;
import edu.icet.service.StudentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
@Slf4j
public class StudentController {
    @Autowired
    StudentService studentService;

    @PostMapping("/addStudent")
    public int addStudent(@RequestBody StudentObj student){
        return studentService.addStudent(student);
    }

    @GetMapping("/getAllStudents")
    public List<StudentObj> getAllStudents(){
        return studentService.getAllStudents();
    }

    @DeleteMapping("/deleteStudentById/{studentId}")
    public boolean deleteStudentById(@PathVariable Long studentId){
        return studentService.deleteStudentById(studentId);
    }

    @PutMapping("/updateStudentById")
    public boolean updateStudentById(@RequestBody StudentObj studentObj){
        return studentService.updateStudentById(studentObj);
    }
}
