import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'app-add-classroom',
  templateUrl: './add-classroom.component.html',
  styleUrls: ['./add-classroom.component.css']
})
export class AddClassroomComponent {

  public classroom = {
    batchNumber: null,
    color: null,
    numbSeats: null,
    numbDesks: null
  }

  private http;
  constructor(private httpClient:HttpClient){
    this.http = httpClient;
  }

  form = new FormGroup({
    batchNumber: new FormControl('', [
      Validators.required
    ]),
    color: new FormControl('', [
      Validators.required
    ]),
    numberSeats: new FormControl('', [
      Validators.required
    ]),
    numberDesks: new FormControl('', [
      Validators.required
    ]),
  });


  saveClassroom() {
    let path = "";
    this.http.post("http://localhost:8080/classroom/addClassroom", this.classroom)
      .subscribe(
        data => {
          console.log(data);
          if(data !== 0){
            path = "assets/img/Tick_icon.png";
            this.showToast("Great! Classroom has been added successfully!", path)
          }else{
            path = "assets/img/Cross_icon.png";
            this.showToast("Something happened in here...", path)
          }
        },
        error =>{
          console.error(error)
          path = "assets/img/Cross_icon.png";
          this.showToast("Oh no! Something happened in server!", path)
        }
      )
  }

  showToast(text: string, path: string): Promise<void> {
    return new Promise((resolve) => {
      let icon = document.getElementById('icon') as HTMLImageElement;
      let toastElement = document.getElementById('liveToast');

      if (toastElement) {
        let bsToast = new bootstrap.Toast(toastElement);
        bsToast.show();

        let txtElement = document.getElementById('txt');
        if (txtElement) {
          txtElement.innerText = text;
        }

        if(icon){
          icon.src = path;
        }

        toastElement.addEventListener('hidden.bs.toast', () => {
          resolve();
        });
      }
    });
  }
}
