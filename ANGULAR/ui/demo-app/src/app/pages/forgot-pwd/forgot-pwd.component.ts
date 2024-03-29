import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.css']
})
export class ForgotPwdComponent {
  hide = true

  private http;
  private rout;
  constructor(private httpClient:HttpClient, private router:Router){
    this.http = httpClient;
    this.rout = router;
  }

  public obj = {
    name: null,
    email: null,
    contactNumber: "",
    pwd: null
  }

  public object = {
    pwd: null
  }


  form = new FormGroup({
    objName: new FormControl('', [
      Validators.required
    ]),
    objEmail: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    objPwd: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')
    ]),
    objectPwd: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')
    ])
  });

  updatePwd(){
    let path = "";
    let res: any = null;
    if(this.obj.pwd === this.object.pwd){
      this.http.post("http://localhost:8080/user/forgot-pwd", this.obj)
      .subscribe(
        data => {
          res = data;
          console.log(res)
          if(res == true){
            path = "assets/img/Tick_icon.png";
            this.showToast("Password has been updated successfully!", path).then(() => { 
              setTimeout(() => {
                this['router'].navigate(['/home-page']); 
              }, 2000)
            });
          }else{
            path = "assets/img/Cross_icon.png";
            this.showToast("Oops, something went wrong! Check if name and email are correct.", path)
          }
        },
        error =>{
          console.error(error)
          path = "assets/img/Cross_icon.png";
          this.showToast("Oh no! Something happened to the server!", path)
        }
      )
    }else{
      path = "assets/img/Cross_icon.png";
      this.showToast("Passwords fields are not equal!", path)
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
