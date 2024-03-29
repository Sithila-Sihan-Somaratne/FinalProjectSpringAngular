import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

declare var bootstrap: any;


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  hide = true;
  private http;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  public user = {
    name: null,
    email: null,
    contactNumber: null,
    pwd: null
  }

  public obj = {
    email: null,
    contactNumber: null,
    pwd: null
  }

  form = new FormGroup({
    userName: new FormControl('', [
      Validators.required
    ]),
    userEmail: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    objEmail: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    userContact: new FormControl('', [
      Validators.required
    ]),
    objContact: new FormControl('', [
      Validators.required
    ]),
    userPwd: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')
    ]),
    objPwd: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')
    ])
  });

  signUpUser() {
    let path = "";
    if (this.user.email != this.obj.email) {
      path = "assets/img/Cross_icon.png";
      this.showToast("Make sure that both email fields are equal", path)
    }
    if (this.user.contactNumber != this.obj.contactNumber) {
      path = "assets/img/Cross_icon.png";
      this.showToast("Make sure that both contact number fields are equal", path)
    }
    if (this.user.pwd != this.obj.pwd) {
      path = "assets/img/Cross_icon.png";
      this.showToast("Make sure that both password fields are equal", path)
    } else {
      this.http.post("http://localhost:8080/user/createAccount", this.user)
        .subscribe(
          data => {
            console.log(data);
            path = "assets/img/Tick_icon.png";
            this.showToast("Great! Sign up worked successfully!", path)
          },
          error => {
            console.error(error)
            path = "assets/img/Cross_icon.png";
            this.showToast("Oh no! Something happened in server!", path)
          }
        )

    }
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

        if (icon) {
          icon.src = path;
        }

        toastElement.addEventListener('hidden.bs.toast', () => {
          resolve();
        });
      }
    });
  }
}
