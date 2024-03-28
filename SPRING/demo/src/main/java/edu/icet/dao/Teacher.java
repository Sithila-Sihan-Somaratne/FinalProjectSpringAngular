package edu.icet.dao;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "teacher")
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long teacherId;
    private String fullName;
    private String institute;
    private String dob;
    private String contactNumber;
    private String subject;

    @Override
    public String toString() {
        return "Teacher{" +
                "teacherId=" + teacherId +
                ", fullName='" + fullName + '\'' +
                ", institute='" + institute + '\'' +
                ", dob='" + dob + '\'' +
                ", contactNumber='" + contactNumber + '\'' +
                ", subject='" + subject + '\'' +
                '}';
    }

    @ManyToOne
    @JoinColumn(name = "classroom_id")
    private Classroom classroom;
}
