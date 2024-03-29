import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  private http;
  public studentList:any;
  public selectedStudent:any = "";
  public studentObj = {
    fullName: null,
    institute: null,
    classroom: {
      batchNumber: null
    },
    contactNumber: null,
    dob : null
  }
  public studentObject = {
    id : null,
    fullName: null,
    institute: null,
    classroom: {
      batchNumber: null
    },
    contactNumber: null,
    dob : null
  }


  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  ngOnInit(): void {
    this.loadStudentInfo()
  }


  loadStudentInfo() {
    this.http.get("http://localhost:8080/student/getAllStudents")
      .subscribe(data => {
        console.log(JSON.stringify(data));
        let list = new Array();
        list.push(data);
        console.log(list);
        for (const iterator of list) {
          console.log(iterator);
          this.studentList = iterator;
        }
      })
  }


  selectRow(student:any) {
      this.selectedStudent = student;
      console.log('Selected student: ', this.selectedStudent);
      let fullName : any = document.getElementById("fullNameTxt") as HTMLInputElement | null
      fullName.value = this.selectedStudent.fullName;
      let instituteTxt : any = document.getElementById("instituteTxt") as HTMLInputElement | null
      instituteTxt.value = this.selectedStudent.institute;
      let classroomIdTxt : any = document.getElementById("classroomIdTxt") as HTMLInputElement | null
      classroomIdTxt.value = this.selectedStudent.classroom.batchNumber;
      let contactNumberTxt : any = document.getElementById("contactNumberTxt") as HTMLInputElement | null
      contactNumberTxt.value = this.selectedStudent.contactNumber;
      let DOBtxt : any = document.getElementById("DOBTxt") as HTMLInputElement | null
      DOBtxt.value = this.selectedStudent.dob;
  }

  updateStudent(){
      this.studentObject.id = this.selectedStudent.id;
      let fullName : any = document.getElementById("fullNameTxt") as HTMLInputElement | null
      this.studentObject.fullName = fullName.value;
      let instituteTxt : any = document.getElementById("instituteTxt") as HTMLInputElement | null
      this.studentObject.institute = instituteTxt.value;
      let classroomIdTxt : any = document.getElementById("classroomIdTxt") as HTMLInputElement | null
      this.studentObject.classroom.batchNumber = classroomIdTxt.value;
      let contactNumberTxt : any = document.getElementById("contactNumberTxt") as HTMLInputElement | null
      this.studentObject.contactNumber = contactNumberTxt.value;
      let DOBtxt : any = document.getElementById("DOBTxt") as HTMLInputElement | null
      this.studentObject.dob = DOBtxt.value;
      console.log(this.studentObject);
      this.http.put("http://localhost:8080/student/updateStudentById", this.studentObject)
      .subscribe(data => {
        console.log(data);
        this.loadStudentInfo();
      })
  }


}