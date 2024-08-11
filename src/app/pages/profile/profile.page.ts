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
    private firebaseAuthService: FirebaesAuthService,
    private store: Store<{userDetails: UserDetails}>,
    private firebaseService: FirebaseService
  ) { }


  userDetails : UserDetails | null = null;
  thingsTodo !: ProfileContent[]
  houseSecrets = [
    {
      title: 'Gryffindor',
      imageUrl: 'https://images.ctfassets.net/usf1vwtuqyxm/2FpHJYJFhT6aPMpIQ8COfE/33d81e3e99d4ec8c1273cfa76c979000/gryffindor-crest-web-fact-file-image.jpg?h=416&w=600&fit=pad',
      url: '/menu/fact-files/-O3YRKSem48y4jtU0Yof',
      category: "Gryffindor"
    },
    {
      title: 'Godric Gryffindor',
      imageUrl: 'https://images.ctfassets.net/usf1vwtuqyxm/4xUxL9W2KYbxgGAFlT6YTb/da7b57820d50c022f7689137191f5990/godric-gryffindor_1_1800x1248.png?h=416&w=600&fit=pad',
      url: '/menu/fact-files/-O3YQOysWunS4t18L7Uc',
      category: "Gryffindor"
    },
    {
      title: 'The Gryffindor common room',
      imageUrl: 'https://images.ctfassets.net/usf1vwtuqyxm/3lkrWoh0cljRWWmPWoIuMb/1537d19ba8f60f603f4793dd75be7ab7/the-gryffindor-common-room_1_1800x1248.png?h=416&w=600&fit=pad',
      url: '/menu/fact-files/-O3YQgc15Cn-d8P9U-QH',
      category: "Gryffindor"
    },
    {
      title: 'The Sword of Gryffindor',
      imageUrl: 'https://images.ctfassets.net/usf1vwtuqyxm/5SN4pqORtsdOWbqniqja06/b53f6ea8d22a021ccfb5215901c8eacb/the-sword-of-gryffindor_1_1800x1248.png?h=416&w=600&fit=pad',
      url: '/menu/fact-files/-O3YQXkq3ImdzXHnU7jZ',
      category: "Gryffindor"
    }
  ]

  ngOnInit() {
    this.store.select(getUserDetails).subscribe(userDetails => this.userDetails = userDetails);
    this.firebaseService.getProfileContent().subscribe(data=>this.thingsTodo = data)
  }

}
