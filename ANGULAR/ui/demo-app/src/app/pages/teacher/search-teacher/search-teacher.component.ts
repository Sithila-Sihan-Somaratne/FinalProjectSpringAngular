import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-teacher',
  templateUrl: './search-teacher.component.html',
  styleUrls: ['./search-teacher.component.css']
})
export class SearchTeacherComponent implements OnInit {

  private http;
  public teacherList:any;
  public searchInput: string = '';


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

  get filteredTeacherList() {
    if (!this.searchInput || !this.teacherList) {
      return this.teacherList;
    }
    return this.teacherList.filter((teacher: { fullName: string; }) => 
      teacher.fullName.toLowerCase().includes(this.searchInput.toLowerCase())
    );
  }
  
}

