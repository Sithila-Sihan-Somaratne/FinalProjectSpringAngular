import { HttpClient } from '@angular/common/http';
import { Component  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  hide = true

  private http;
  private rout;
  constructor(private httpClient:HttpClient, private router:Router){
    this.http = httpClient;
    this.rout = router;
  }

  public obj = {
    name: null,
    email: "",
    contactNumber: "",
    pwd: null
  }


  form = new FormGroup({
    objName: new FormControl('', [
      Validators.required
    ]),
    objPwd: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')
    ])
  });

  logIn(){
    let path = "";
    let res: any = null;
    this.http.post("http://localhost:8080/user/logIn", this.obj)
      .subscribe(
        data => {
          res = data;
          console.log(res)
          if(res.message == "Log in has been done successfully!"){
            path = "assets/img/Tick_icon.png";
            this.showToast(res.message, path).then(() => { 
              setTimeout(() => {
                this['router'].navigate(['/home-page']); 
              }, 2000)
            });
          }else{
            path = "assets/img/Cross_icon.png";
            this.showToast(res.message, path)
          }
        },
        error =>{
          console.error(error)
          path = "assets/img/Cross_icon.png";
          this.showToast("Oh no! Something happened to the server!", path)
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
