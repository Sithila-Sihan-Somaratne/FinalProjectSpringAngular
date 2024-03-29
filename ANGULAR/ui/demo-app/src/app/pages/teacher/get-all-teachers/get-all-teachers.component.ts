import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-all-teachers',
  templateUrl: './get-all-teachers.component.html',
  styleUrls: ['./get-all-teachers.component.css']
})
export class GetAllTeachersComponent implements OnInit{
  private http;
  public teacherList:any;

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
        this.teacherList = list;
        for (const iterator of list) {
          console.log(iterator);
          this.teacherList = iterator;
        }
      })
  }
}
