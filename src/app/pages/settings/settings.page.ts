import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/interface/userauth';
import { FirebaesAuthService } from 'src/app/services/firebaes-auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {


  constructor(
    private firebaseAuthService: FirebaesAuthService
  ) { }

  userDetails !: UserDetails
  ngOnInit() {
    this.firebaseAuthService.getUserDetails().then(user=>{
      this.userDetails = user;
      console.log(this.userDetails)
    })
  }
}
