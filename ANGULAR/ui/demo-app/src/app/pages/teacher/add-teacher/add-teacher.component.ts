import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

declare var bootstrap : any;

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent {
  public teacher = {
    fullName: null,
    institute: null,
    classroom: {
      batchNumber: null
    },
    contactNumber: null,
    dob: null,
    subject: null
  }

  private http;
  constructor(private httpClient:HttpClient){
    this.http = httpClient;
  }

  form = new FormGroup({
    fullName: new FormControl('', [
      Validators.required
    ]),
    institute: new FormControl('', [
      Validators.required
    ]),
    classroom: new FormControl('', [
      Validators.required
    ]),
    contactNumber: new FormControl('', [
      Validators.required
    ]),
    dob: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
    ]),
    subject: new FormControl('', [
      Validators.required
    ]),
  });


  saveTeacher() {
    let path = "";
    this.http.post("http://localhost:8080/teacher/addTeacher", this.teacher)
      .subscribe(
        data => {
          console.log(data);
          if(data != 0){
            path = "assets/img/Tick_icon.png";
            this.showToast("Great! Teacher has been added successfully!", path)
          }else{
            path = "assets/img/Cross_icon.png";
            this.showToast("Oh no! Something happened! Maybe classroom isn't created yet.", path)
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
