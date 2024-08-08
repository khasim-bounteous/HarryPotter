import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaesAuthService } from 'src/app/services/firebaes-auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { UserauthService } from 'src/app/services/userauth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    private authService: UserauthService,
    private toastService: ToastService,
    private router: Router,
    private firebaseAuthService: FirebaesAuthService
  ) { }

  signupForm !: FormGroup

  ngOnInit() {
    this.signupForm = new FormGroup({
      name: new FormControl(""),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required),
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl(""),
    })
  }

  onSubmit() {
    if (this.signupForm.valid) {
      // const signupData = {
      //   name: this.signupForm.value.firstName.trim() + ' ' + this.signupForm.value.lastName.trim(),
      //   email: this.signupForm.value.email,
      //   password: this.signupForm.value.password,
      //   avatar: 'https://picsum.photos/800',
      //   role: 'customer'
      // }
      // this.authService.userSignup(signupData).subscribe({
      //   next: data => {
      //     console.log(data)
      //     localStorage.setItem("access_token", data.access_token)
      //     localStorage.setItem("refresh_token", data.refresh_token)
      //     this.signupForm.reset()
      //     this.toastService.presentToast("Registred successfully")
      //     this.router.navigateByUrl("/login")
      //   },
      //   error: (err) => console.log(err)
      // })

      const signupData = this.signupForm.value;
      this.firebaseAuthService.signup(signupData).subscribe({
        next: async () => {
          this.toastService.presentToast('Signup Success')
          this.router.navigate(['/login']);
        },
        error: async (error) => {
          this.toastService.presentToast(error.message)
          console.error(error)
          // Handle error here
        }
      });
    }
    else{
      this.toastService.presentToast("Please enter your details")
    }

  }
}


