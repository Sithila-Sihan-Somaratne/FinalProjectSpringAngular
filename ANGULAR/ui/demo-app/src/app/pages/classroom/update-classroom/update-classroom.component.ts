import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-classroom',
  templateUrl: './update-classroom.component.html',
  styleUrls: ['./update-classroom.component.css']
})
export class UpdateClassroomComponent implements OnInit{
  private http;
  public classroomList: any;
  public selectedClassroom: any;
  public classroomObj = {
    batchNumber : null,
    color : null,
    numbDesks : null,
    numbSeats : null
  }
  public classroomObject = {
    batchNumber : null,
    color : null,
    numbDesks : null,
    numbSeats : null
  }

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

  selectRow(classroom:any){
      this.selectedClassroom = classroom;
      console.log('Selected classroom: ', this.selectedClassroom);
      let batchNumberTxt : any = document.getElementById("batchNumberTxt") as HTMLInputElement | null
      batchNumberTxt.value = this.selectedClassroom.batchNumber;
      let colorTxt : any = document.getElementById("colorTxt") as HTMLInputElement | null
      colorTxt.value = this.selectedClassroom.color;
      let numberDesksTxt : any = document.getElementById("numberDesksTxt") as HTMLInputElement | null
      numberDesksTxt.value = this.selectedClassroom.numbDesks;
      let numberSeatsTxt : any = document.getElementById("numberSeatsTxt") as HTMLInputElement | null
      numberSeatsTxt.value = this.selectedClassroom.numbSeats;
  }

  updateClassroom(){
      let batchNumberTxt : any = document.getElementById("batchNumberTxt") as HTMLInputElement | null
      this.classroomObject.batchNumber = batchNumberTxt.value;
      let colorTxt : any = document.getElementById("colorTxt") as HTMLInputElement | null
      this.classroomObject.color = colorTxt.value;
      let numberDesksTxt : any = document.getElementById("numberDesksTxt") as HTMLInputElement | null
      this.classroomObject.numbDesks = numberDesksTxt.value;
      let numberSeatsTxt : any = document.getElementById("numberSeatsTxt") as HTMLInputElement | null
      this.classroomObject.numbSeats = numberSeatsTxt.value;
      console.log(this.classroomObject);
      this.http.put("http://localhost:8080/classroom/updateClassroomByBatch", this.classroomObject)
      .subscribe(data => {
        console.log(data);
        this.loadClassroomInfo();
      })
  }

}{

}
