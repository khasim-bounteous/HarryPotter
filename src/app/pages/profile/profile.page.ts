import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/interface/userauth';
import { FirebaesAuthService } from 'src/app/services/firebaes-auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private firebaseAuthService: FirebaesAuthService
  ) { }

  userDetails !: UserDetails
  ngOnInit() {
    this.firebaseAuthService.getUserDetails().then(user=>{
      this.userDetails = user;
    })
  }

}
