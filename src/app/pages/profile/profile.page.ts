import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserDetails } from 'src/app/interface/userauth';
import { FirebaesAuthService } from 'src/app/services/firebaes-auth.service';
import { getUserDetails } from 'src/app/store/Potter.selector';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private firebaseAuthService: FirebaesAuthService,
    private store: Store<{userDetails: UserDetails}>
  ) { }


  userDetails : UserDetails | null = null;
  thingsTodo = [
    {
      title: "Alchemy J.K. Rowling",
      imageUrl: "https://images.ctfassets.net/usf1vwtuqyxm/5wYEvpPzb2kY0maCm4e0iK/07fa66ac13a8f49d1fd86576262d6c32/Dragon_PM_B7C26M1_DragonInGringotts_Moment.jpg?fm=webp&q=100&w=2560",
      url: "/menu/jk-rowling-originals/-O3TI5OzONK7xIjIJYDr",
      category: "todo"
    },
    {
      title: "The Potter Family J.K. Rowling",
      imageUrl: "https://images.ctfassets.net/usf1vwtuqyxm/2uo8UV2ZCMIyuYI6KSwo0g/ce1d7d9cd78c8613492fbdd721d4a734/MirrorOfErised_PM_B1C12M3_HarryInFrontOfTheMirrorOfErised_Moment.jpg?fm=webp&q=70&w=2560",
      url: "/menu/jk-rowling-originals/-O3TI5OyfxZQZblVVfhI",
      category: "todo"
    },
    {
      title: "The wizarding bank located in Diagon Alley",
      imageUrl: "https://images.ctfassets.net/usf1vwtuqyxm/EXG7Cx5B2lMfKJWXH4dYx/26172e411360e9686004d02cf3ce69a9/gringotts_1_1800x1248.png?h=416&w=600&fit=pad",
      url: "/menu/fact-files/-O3YQgbrWupbq_j8RYka",
      category: "todo"
    },
    {
      title: "1920s Wizarding America By J.K. Rowling",
      imageUrl: "https://images.ctfassets.net/usf1vwtuqyxm/TW8wu9AO4gW4SmicmgsUk/c789fff664c102fcbb9b5a0340d3eece/History_in_North_America_HoNA_Ilvermorny_Day_5.jpg?fm=webp&q=100&w=2560",
      url: "/menu/jk-rowling-originals/-O3TI5OuHemGQ2FF9QTP",
      category: "todo"
    },
    {
      title: "The Patronus Charm is a defensive spell that, if performed correctly",
      imageUrl: "https://images.ctfassets.net/usf1vwtuqyxm/5YxR65a3JFRHh6nWfohljG/bfe188280aeadaacfcb5c95eec283cc9/the-patronus-charm_1_1800x1248.png?h=416&w=600&fit=pad",
      url: "/menu/fact-files/-O3YR5OKxXsOh1GgyhDe",
      category: "todo"
    },
    {
      title: "Dumbledore's office was a large circular room full of rare and unusual magical artefacts",
      imageUrl: "https://images.ctfassets.net/usf1vwtuqyxm/2TFUTVFyp6qraDWWDok96T/3b73b836accbd3d851d07f1244ed65a8/dumbledores-office_1_1800x1248.png?h=416&w=600&fit=pad",
      url: "/menu/fact-files/-O3YQgbo8ywNoh3O21V1",
      category: "todo"
    },
  ]

  houseSecrets = [
    {
      title: "Dumbledore's office was a large circular room full of rare and unusual magical artefacts",
      imageUrl: "https://images.ctfassets.net/usf1vwtuqyxm/5y8iTFqvqPmeCxjzAkmvec/86bb75102291f1189d1bbea0e190d5d5/HP-F3-prisoner-of-azkaban-hermione-crookshanks-and-ron-web-landscape.jpg?w=1320&h=743&fit=fill&f=top&fm=webp&q=50",      
      url: "/menu/fact-files/-O3YQgbo8ywNoh3O21V1",
      category: "todo"
    },
    {
      title: 'Gryffindor',
      imageUrl: 'https://images.ctfassets.net/usf1vwtuqyxm/2FpHJYJFhT6aPMpIQ8COfE/33d81e3e99d4ec8c1273cfa76c979000/gryffindor-crest-web-fact-file-image.jpg?h=416&w=600&fit=pad',
      url: '',
      category: "todo"
    },
  ]

  ngOnInit() {
    this.store.select(getUserDetails).subscribe(userDetails => this.userDetails = userDetails);
  }

}
