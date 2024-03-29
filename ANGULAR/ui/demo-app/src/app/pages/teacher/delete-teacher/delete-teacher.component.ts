import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-teacher',
  templateUrl: './delete-teacher.component.html',
  styleUrls: ['./delete-teacher.component.css']
})
export class DeleteTeacherComponent implements OnInit {

  private http;
  public teacherList:any;
  public selectedTeacherId:number = 0;

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


  selectRow(id:number) {
      this.selectedTeacherId = id;
      console.log('Selected student ID: ', this.selectedTeacherId);
  }


  removeTeacher(){
    let id = this.selectedTeacherId;
    let apiUrl = `http://localhost:8080/teacher/deleteTeacherById/${id}`;
    this.http.delete(apiUrl)
      .subscribe(data =>{
        console.log(data);
        this.loadTeacherInfo();
      })
  }
}