import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FirebaesAuthService } from 'src/app/services/firebaes-auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { UserauthService } from 'src/app/services/userauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private authService: UserauthService,
    private firebaseAuthService: FirebaesAuthService,
    private toastService: ToastService,
    private router: Router
  ) { }

  loginForm !: FormGroup

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required])
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      const loginData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      this.firebaseAuthService.login(loginData).subscribe(data=>{
          this.toastService.presentToast('Login successful!');
          this.loginForm.reset()
          this.router.navigate(['/menu/home']);
      })
      // this.authService.userLogin(loginData).subscribe({
      //   next: data=>{
      //     localStorage.setItem("access_token",data.access_token)
      //     localStorage.setItem("refresh_token",data.refresh_token)
      //     this.toastService.presentToast('Login successful!');
      //     this.loginForm.reset()
      //     this.router.navigate(['/menu/home']);
      //   },
      //   error: (error)=>{
      //     this.toastService.presentToast('Login failed!! please enter your login details correctly');
      //     console.log(error.error.message)
      //   }
      // })
    }
    else{
      this.toastService.presentToast('Please fill the fields')
    }
  }


}
