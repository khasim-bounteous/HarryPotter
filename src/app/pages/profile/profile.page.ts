import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProfileContent } from 'src/app/interface/profileContent';
import { UserDetails } from 'src/app/interface/userauth';
import { FirebaesAuthService } from 'src/app/services/firebaes-auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { getUserDetails } from 'src/app/store/Potter.selector';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private store: Store<{userDetails: UserDetails}>
  ) { }

  settingOpen = false

  userDetails : UserDetails | null = null;

  ngOnInit() {
    this.store.select(getUserDetails).subscribe(userDetails => {
      this.userDetails = userDetails
      console.log(userDetails)
    });
  }

}
