import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserDetails } from 'src/app/interface/userauth';
import { FirebaesAuthService } from 'src/app/services/firebaes-auth.service';
import { getUserDetails } from 'src/app/store/Potter.selector';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent  implements OnInit {
  constructor(
    private store: Store<{userDetails: UserDetails}>
  ) { }

  userDetails !: UserDetails
  ngOnInit() {
    this.store.select(getUserDetails).subscribe(userDetails => {
      this.userDetails = userDetails
      console.log(userDetails)
    });
  }
}
