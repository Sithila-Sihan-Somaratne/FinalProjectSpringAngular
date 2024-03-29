import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-classroom',
  templateUrl: './search-classroom.component.html',
  styleUrls: ['./search-classroom.component.css']
})
export class SearchClassroomComponent implements OnInit{
  private http;
  public classroomList: any
  public searchInput: string = '';

  constructor(private httpClient: HttpClient){
    this.http = httpClient;
  }

  ngOnInit(): void {
    this.loadClassroomInfo()  
  }

  loadClassroomInfo(){
    this.http.get("http://localhost:8080/classroom/getAllClassrooms")
      .subscribe(data => {
        console.log(JSON.stringify(data));
        let list = new Array();
        list.push(data);
        console.log(list);
        for (const iterator of list) {
          console.log(iterator);
          this.classroomList = iterator;
        }
      })
  }

  get filtredClassroomList() {
    if (!this.searchInput || !this.classroomList) {
      return this.classroomList;
    }
    return this.classroomList.filter((classroom: { batchNumber: string; }) => 
      classroom.batchNumber.toLowerCase().includes(this.searchInput.toLowerCase())
    );
  }

}