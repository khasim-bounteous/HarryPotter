import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { dateOfBirthValidator } from 'src/app/customvalidators/dateOfBirthValidator';
import { noWhitespaceValidator } from 'src/app/customvalidators/noWhiteSpaceValidator';
import { strongPasswordValidator } from 'src/app/customvalidators/strongPasswordValidator';
import { FirebaesAuthService } from 'src/app/services/firebaes-auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { UserauthService } from 'src/app/services/userauth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupForm!: FormGroup;
  isLoading = false
  
  constructor(
    private authService: UserauthService,
    private toastService: ToastService,
    private router: Router,
    private firebaseAuthService: FirebaesAuthService
  ) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      // name: new FormControl(""),
      dob:  new FormControl("", [Validators.required, dateOfBirthValidator()]),
      email: new FormControl("", [Validators.required, Validators.email,noWhitespaceValidator()]),
      password: new FormControl("", [Validators.required, noWhitespaceValidator(),strongPasswordValidator()]),
      firstName: new FormControl("", [Validators.required,noWhitespaceValidator()]),
      lastName: new FormControl(""),
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const signupData = this.signupForm.value;
      this.isLoading = true
      this.firebaseAuthService.signup(signupData).subscribe({
        next: async () => {
          this.toastService.presentToast('Signup Success');
          this.router.navigate(['/login']);
        },
        error: async (error) => {
          this.toastService.presentToast(error.message);
          console.error(error);
        }
      });
    } else {
      this.toastService.presentToast("Please enter your details");
    }
  }
}
