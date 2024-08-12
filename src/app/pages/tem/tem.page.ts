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
      },
      {
        title: 'Slytherin',
        imageUrl: 'https://images.ctfassets.net/usf1vwtuqyxm/4HoZaEXbZFJDvu3c3KfaQW/d31cd135bd0c209c7da9ef48ad557311/slytherin-crest-web-fact-file-images.jpg?h=416&w=600&fit=pad',
        url: '/menu/fact-files/-O3YRKSiATWqUebHsiHN',
        category: "Slytherin"
      },
      {
        title: 'Salazar Slytherin',
        imageUrl: 'https://images.ctfassets.net/usf1vwtuqyxm/75WJtg1xvq6iaeVJNJ9nDc/e797b43a0a83a8e99b79456143b9ac6e/salazar-slytherin_1_1800x1248.png?h=416&w=600&fit=pad',
        url: '/menu/fact-files/-O3YQOzNCECry5_nkagm',
        category: "Slytherin"
      },
      {
        title: 'The Slytherin common room',
        imageUrl: 'https://images.ctfassets.net/usf1vwtuqyxm/7xvjjnk3ohlMXpKfQ5XxUs/48b84a7470b321832a4602324d807f8c/the-slytherin-common-room_3_1800x1248.png?h=416&w=600&fit=pad',
        url: '/menu/fact-files/-O3YQgc2SG9jZxTpE9X4',
        category: "Slytherin"
      },
      {
        title: 'The Chamber of Secrets',
        imageUrl: 'https://images.ctfassets.net/usf1vwtuqyxm/2f18k2B1X7OIMEvvsfKLlS/7c9455c64f2045c5702ee63a095f38d2/fact-file-hero-chamber-of-secrets-hp-f2-harry.jpg?h=416&w=600&fit=pad',
        url: '/menu/fact-files/-O3YQgc-EHM0qxs831z5',
        category: "Slytherin"
      },
      {
        title: 'Hufflepuff',
        imageUrl: 'https://images.ctfassets.net/usf1vwtuqyxm/1GHlvnfWeIgrFMUdSmLiS5/4d5edf0b1f84866c5f20d96a53faf623/hufflepuff-crest-web-fact-file-images.jpg?h=416&w=600&fit=pad',
        url: '/menu/fact-files/-O3YRKSf5ewPWI-EZbxp',
        category: "Hufflepuf"
      },
      {
        title: 'Helga Hufflepuff',
        imageUrl: 'https://images.ctfassets.net/usf1vwtuqyxm/2yh79uYqFiYP4mv7bnJMjm/d731818f70d8e23681633f4eba9bc60d/helga-hufflepuff_1_1800x1248.png?h=416&w=600&fit=pad',
        url: '/menu/fact-files/-O3YQOyvfP0vEamMNgt4',
        category: "Hufflepuf"
      },
      {
        title: "Hufflepuff's cup",
        imageUrl: 'https://images.ctfassets.net/usf1vwtuqyxm/3J0qZBPE3zaLMRSSGjAuGE/d2cdf3da0b8eed9affd4ab347b454c46/hufflepuffs-cup_1_1800x1248.png?h=416&w=600&fit=pad',
        url: '/menu/fact-files/-O3YQXkhOEVhCs5STqtk',
        category: "Hufflepuf"
      },
      {
        title: "The Hufflepuff common room",
        imageUrl: 'https://images.ctfassets.net/usf1vwtuqyxm/7KzzNMFOrRUu6yiqwsbwv7/bebfd297deead4c73c32896974f36f76/the-hufflepuff-common-room_2_1800x1248.png?h=416&w=600&fit=pad',
        url: '/menu/fact-files/-O3YQgc15Cn-d8P9U-QK',
        category: "Hufflepuf"
      },
      {
        title: "Ravenclaw",
        imageUrl: 'https://images.ctfassets.net/usf1vwtuqyxm/p0d3jvLt7ndev0IPLLjBN/ed400804b0b89dfe58a965f592b12553/ravenclaw-crest-web-fact-file-image.jpg?h=416&w=600&fit=pad',
        url: '/menu/fact-files/-O3YRKSh6HM4n_U5kQ3s',
        category: "Ravenclaw"
      },
      {
        title: "Rowena Ravenclaw",
        imageUrl: 'https://images.ctfassets.net/usf1vwtuqyxm/1O2LdPUz8m6Jh14UZrUIeC/399eb5f15969110341f2815f524bca3d/rowena-ravenclaw_1_1800x1248.png?h=416&w=600&fit=pad',
        url: '/menu/fact-files/-O3YQOzMwPMO0p8KfjXL',
        category: "Ravenclaw"
      },
      {
        title: "Ravenclaw's diadem",
        imageUrl: 'https://images.ctfassets.net/usf1vwtuqyxm/4phhDQX4zy7U4yLlSVzjAB/be5f2253346f4a3045e494f8752eeb43/ravenclaws-diadem_1_1800x1248.png?h=416&w=600&fit=pad',
        url: '/menu/fact-files/-O3YQXkk9g7XQH4-Dewf',
        category: "Ravenclaw"
      },
      {
        title: "The Ravenclaw common room",
        imageUrl: 'https://images.ctfassets.net/usf1vwtuqyxm/1VEhY2hYfsBVXvnjC3kD0u/44fc853f78aad66546b23497b87f4d63/the-ravenclaw-common-room_2_1800x1248.png?h=416&w=600&fit=pad',
        url: '/menu/fact-files/-O3YQgc2SG9jZxTpE9X0',
        category: "Ravenclaw"
      },
  ]
  ngOnInit() {
    this.firebaseService.getBooks().subscribe(data=>console.log(data))
  }

  addData(){
    console.log("working")
    this.firebaseService.addData(this.data)
  }
}
