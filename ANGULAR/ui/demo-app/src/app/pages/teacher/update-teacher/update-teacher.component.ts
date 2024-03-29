import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {

  private http;
  public teacherList:any;
  public selectedTeacher:any = "";
  public teacher = {
    fullName: null,
    institute: null,
    contactNumber: null,
    dob : null,
    subject: null,
    classroom: {
      batchNumber: null
    }
  }
  public teacherObj = {
    id : null,
    fullName: null,
    institute: null,
    contactNumber: null,
    dob : null,
    subject: null,
    classroom:{
      batchNumber: null
    }
  }


  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  ngOnInit(): void {
    this.loadTeacherInfo()
  }


  loadTeacherInfo() {
    this.http.get("http://localhost:8080/teacher/getAllTeachers")
      .subscribe(data => {
        console.log(JSON.stringify(data));
        let list = new Array();
        list.push(data);
        console.log(list);
        for (const iterator of list) {
          console.log(iterator);
          this.teacherList = iterator;
        }
      })
  }


  selectRow(teacher:any) {
      this.selectedTeacher = teacher;
      console.log('Selected teacher: ', this.selectedTeacher);
      let fullName : any = document.getElementById("fullNameTxt") as HTMLInputElement | null
      fullName.value = this.selectedTeacher.fullName;
      let instituteTxt : any = document.getElementById("instituteTxt") as HTMLInputElement | null
      instituteTxt.value = this.selectedTeacher.institute;
      let contactNumberTxt : any = document.getElementById("contactNumberTxt") as HTMLInputElement | null
      contactNumberTxt.value = this.selectedTeacher.contactNumber;
      let DOBtxt : any = document.getElementById("DOBTxt") as HTMLInputElement | null
      DOBtxt.value = this.selectedTeacher.dob;
      let subjectTxt : any = document.getElementById("subjectTxt") as HTMLInputElement | null
      subjectTxt.value = this.selectedTeacher.subject;
      let classroomIdTxt : any = document.getElementById("classroomIdTxt") as HTMLInputElement | null
      classroomIdTxt.value = this.selectedTeacher.classroom.batchNumber;
  }

  updateTeacher(){
      this.teacherObj.id = this.selectedTeacher.id;
      let fullName : any = document.getElementById("fullNameTxt") as HTMLInputElement | null
      this.teacherObj.fullName = fullName.value;
      let contactNumberTxt : any = document.getElementById("contactNumberTxt") as HTMLInputElement | null
      this.teacherObj.contactNumber = contactNumberTxt.value;
      let DOBtxt : any = document.getElementById("DOBTxt") as HTMLInputElement | null
      this.teacherObj.dob = DOBtxt.value;
      let subjectTxt : any = document.getElementById("subjectTxt") as HTMLInputElement | null
      this.teacherObj.subject = subjectTxt.value;
      let classroomIdTxt : any = document.getElementById("classroomIdTxt") as HTMLInputElement | null
      this.teacherObj.classroom.batchNumber = classroomIdTxt.value;
      console.log(this.teacherObj);
      this.http.put("http://localhost:8080/teacher/updateTeacherById", this.teacherObj)
      .subscribe(data => {
        console.log(data);
        this.loadTeacherInfo();
      })
  }


}
