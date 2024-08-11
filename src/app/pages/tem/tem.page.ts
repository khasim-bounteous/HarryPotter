import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-tem',
  templateUrl: './tem.page.html',
  styleUrls: ['./tem.page.scss'],
})
export class TemPage implements OnInit {

  constructor(
    private firebaseService: FirebaseService
  ) { }

  
   data =  [
    {
      title: "Alchemy J.K. Rowling",
      imageUrl: "https://images.ctfassets.net/usf1vwtuqyxm/5wYEvpPzb2kY0maCm4e0iK/07fa66ac13a8f49d1fd86576262d6c32/Dragon_PM_B7C26M1_DragonInGringotts_Moment.jpg?fm=webp&q=100&w=2560",
      url: "/menu/jk-rowling-originals/-O3TI5OzONK7xIjIJYDr",
      category: "top_picks"
    },
    {
      title: "The Potter Family J.K. Rowling",
      imageUrl: "https://images.ctfassets.net/usf1vwtuqyxm/2uo8UV2ZCMIyuYI6KSwo0g/ce1d7d9cd78c8613492fbdd721d4a734/MirrorOfErised_PM_B1C12M3_HarryInFrontOfTheMirrorOfErised_Moment.jpg?fm=webp&q=70&w=2560",
      url: "/menu/jk-rowling-originals/-O3TI5OyfxZQZblVVfhI",
      category: "top_picks"
    },
    {
      title: "The wizarding bank located in Diagon Alley",
      imageUrl: "https://images.ctfassets.net/usf1vwtuqyxm/EXG7Cx5B2lMfKJWXH4dYx/26172e411360e9686004d02cf3ce69a9/gringotts_1_1800x1248.png?h=416&w=600&fit=pad",
      url: "/menu/fact-files/-O3YQgbrWupbq_j8RYka",
      category: "top_picks"
    },
    {
      title: "1920s Wizarding America By J.K. Rowling",
      imageUrl: "https://images.ctfassets.net/usf1vwtuqyxm/TW8wu9AO4gW4SmicmgsUk/c789fff664c102fcbb9b5a0340d3eece/History_in_North_America_HoNA_Ilvermorny_Day_5.jpg?fm=webp&q=100&w=2560",
      url: "/menu/jk-rowling-originals/-O3TI5OuHemGQ2FF9QTP",
      category: "top_picks"
    },
    {
      title: "The Patronus Charm is a defensive spell that, if performed correctly",
      imageUrl: "https://images.ctfassets.net/usf1vwtuqyxm/5YxR65a3JFRHh6nWfohljG/bfe188280aeadaacfcb5c95eec283cc9/the-patronus-charm_1_1800x1248.png?h=416&w=600&fit=pad",
      url: "/menu/fact-files/-O3YR5OKxXsOh1GgyhDe",
      category: "top_picks"
    },
    {
      title: "Dumbledore's office was a large circular room full of rare and unusual magical artefacts",
      imageUrl: "https://images.ctfassets.net/usf1vwtuqyxm/2TFUTVFyp6qraDWWDok96T/3b73b836accbd3d851d07f1244ed65a8/dumbledores-office_1_1800x1248.png?h=416&w=600&fit=pad",
      url: "/menu/fact-files/-O3YQgbo8ywNoh3O21V1",
      category: "top_picks"
    },
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
    this.firebaseService.getBooks().subscribe(data=>console.log(data))
  }

  addData(){
    console.log("working")
    this.firebaseService.addData(this.data)
  }
}
