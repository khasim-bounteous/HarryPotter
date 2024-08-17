import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { noWhitespaceValidator } from 'src/app/customvalidators/noWhiteSpaceValidator';
import { strongPasswordValidator } from 'src/app/customvalidators/strongPasswordValidator';
import { UserDetails } from 'src/app/interface/userauth';
import { FirebaesAuthService } from 'src/app/services/firebaes-auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { UserauthService } from 'src/app/services/userauth.service';
import { loadUserDetails } from 'src/app/store/Potter.action';

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
    private store : Store<UserDetails>,
    private router: Router
  ) { }

  loginForm !: FormGroup
  isLoading = false

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,strongPasswordValidator(),noWhitespaceValidator()])
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      const loginData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      this.isLoading = true
      this.firebaseAuthService.login(loginData).subscribe({
        next: async () => {
          this.toastService.presentToast('Login successful!');
          this.loginForm.reset()
          this.store.dispatch(loadUserDetails())
          this.router.navigate(['/']);
          this.isLoading = false
        },
        error: async (error) => {
          this.isLoading = false
          this.toastService.presentToast("invalid credentials");
          console.error(error);
        }
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
