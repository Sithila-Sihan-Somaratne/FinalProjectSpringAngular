import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-all-students',
  templateUrl: './get-all-students.component.html',
  styleUrls: ['./get-all-students.component.css']
})
export class GetAllStudentsComponent implements OnInit{
  private http;
  public studentList:any;

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
        this.studentList = list;
        for (const iterator of list) {
          console.log(iterator);
          this.studentList = iterator;
        }
      })
  }
}
