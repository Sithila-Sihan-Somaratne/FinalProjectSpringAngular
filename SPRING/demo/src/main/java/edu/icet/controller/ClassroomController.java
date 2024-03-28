package edu.icet.controller;

import edu.icet.dto.ClassroomObj;
import edu.icet.service.ClassroomService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/classroom")
@CrossOrigin
@Slf4j
public class ClassroomController {
    @Autowired
    ClassroomService classroomService;

    @PostMapping("addClassroom")
    public int addClassroom(@RequestBody ClassroomObj classroomObj){
        return classroomService.addClassroom(classroomObj);
    }

    @GetMapping("/getAllClassrooms")
    public List<ClassroomObj> getAllClassrooms(){
        return classroomService.getAllClassrooms();
    }

    @DeleteMapping("/deleteClassroomByBatch/{batchNumber}")
    public boolean deleteClassroomByBatch(@PathVariable String batchNumber){
        return classroomService.deleteClassroomByBatch(batchNumber);
    }

    @PutMapping("/updateClassroomByBatch")
    public boolean updateClassroomByBatch(@RequestBody ClassroomObj classroomObj){
        return classroomService.updateClassroomByBatch(classroomObj);
    }

}
