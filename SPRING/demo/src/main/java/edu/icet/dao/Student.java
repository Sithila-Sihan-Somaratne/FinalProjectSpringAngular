package edu.icet.dao;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "student")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long studentId;
    private String fullName;
    private String institute;
    private String dob;
    private String contactNumber;

    @ManyToOne
    @JoinColumn(name = "classroom_id")
    private Classroom classroom;

    @Override
    public String toString() {
        return "Student{" +
                "studentId=" + studentId +
                ", fullName='" + fullName + '\'' +
                ", institute='" + institute + '\'' +
                ", dob='" + dob + '\'' +
                ", contactNumber='" + contactNumber + '\'' +
                '}';
    }
}
