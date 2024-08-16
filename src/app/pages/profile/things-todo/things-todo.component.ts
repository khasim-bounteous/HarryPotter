import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProfileContent } from 'src/app/interface/profileContent';
import { UserDetails } from 'src/app/interface/userauth';
import { FirebaesAuthService } from 'src/app/services/firebaes-auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { getUserDetails } from 'src/app/store/Potter.selector';

@Component({
  selector: 'app-things-todo',
  templateUrl: './things-todo.component.html',
  styleUrls: ['./things-todo.component.scss'],
})
export class ThingsTodoComponent  implements OnInit {
  constructor(
    private firebaseAuthService: FirebaesAuthService,
    private store: Store<{userDetails: UserDetails}>,
    private firebaseService: FirebaseService
  ) { }


  userDetails : UserDetails | null = null;
  thingsTodo !: ProfileContent[]
  houseSecrets !: ProfileContent[]

  ngOnInit() {
    this.store.select(getUserDetails).subscribe(userDetails => {
      this.userDetails = userDetails
      this.firebaseService.getProfileContent('top_picks').subscribe(data=>this.thingsTodo = data)
      if(userDetails.house)
      this.firebaseService.getProfileContent(userDetails.house).subscribe(data=>this.houseSecrets = data)
    });

  }


}
