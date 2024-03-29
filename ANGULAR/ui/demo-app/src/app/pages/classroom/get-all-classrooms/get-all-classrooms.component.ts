import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-all-classrooms',
  templateUrl: './get-all-classrooms.component.html',
  styleUrls: ['./get-all-classrooms.component.css']
})
export class GetAllClassroomsComponent  implements OnInit{
  private http;
  public classroomList: any

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

}
