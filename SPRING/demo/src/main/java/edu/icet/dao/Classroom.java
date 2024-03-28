package edu.icet.dao;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "classroom")
public class Classroom {
    @Id
    private String batchNumber;
    private String color;
    private int numbSeats;
    private int numbDesks;
    @OneToMany(mappedBy = "classroom", orphanRemoval = true)
    @JsonIgnore
    private List<Teacher> teacherList;
    @OneToMany(mappedBy = "classroom", orphanRemoval = true)
    @JsonIgnore
    private List<Student> studentList;

    @Override
    public String toString() {
        return "Classroom{" +
                "batchNumber='" + batchNumber + '\'' +
                ", color='" + color + '\'' +
                ", numbSeats=" + numbSeats +
                ", numbDesks=" + numbDesks +
                ", teacherList=" + teacherList +
                ", studentList=" + studentList +
                '}';
    }
}
