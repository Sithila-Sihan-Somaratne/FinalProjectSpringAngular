import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-classroom',
  templateUrl: './delete-classroom.component.html',
  styleUrls: ['./delete-classroom.component.css']
})
export class DeleteClassroomComponent implements OnInit{
  private http;
  public classroomList: any;
  public selectedClassroomId: number = 0;

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

  selectRow(id:number) {
    this.selectedClassroomId = id;
    console.log('Selected student ID: ', this.selectedClassroomId);
  }


  removeClassroom(){
    let id = this.selectedClassroomId;
    let apiUrl = `http://localhost:8080/classroom/deleteClassroomByBatch/${id}`;
    this.http.delete(apiUrl)
      .subscribe(data =>{
        console.log(data);
        this.loadClassroomInfo();
      })
  }

}
