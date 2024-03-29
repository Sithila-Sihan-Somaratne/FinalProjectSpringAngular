import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  private http;
  public studentList:any;
  public selectedStudentId:number = 0;

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


  selectRow(id:number) {
      this.selectedStudentId = id;
      console.log('Selected student ID: ', this.selectedStudentId);
  }


  removeStudent(){
    let id = this.selectedStudentId;
    let apiUrl = `http://localhost:8080/student/deleteStudentById/${id}`;
    this.http.delete(apiUrl)
      .subscribe(data =>{
        console.log(data);
        this.loadStudentInfo();
      })
  }
}