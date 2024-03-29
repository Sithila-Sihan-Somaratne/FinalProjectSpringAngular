import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {

  private http;
  public studentList:any;
  public searchInput: string = '';


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

  get filteredStudentList() {
    if (!this.searchInput || !this.studentList) {
      return this.studentList;
    }
    return this.studentList.filter((student: { fullName: string; }) => 
      student.fullName.toLowerCase().includes(this.searchInput.toLowerCase())
    );
  }
  
}
