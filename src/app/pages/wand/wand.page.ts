import { Component, OnInit } from '@angular/core';
import { FirebaesAuthService } from 'src/app/services/firebaes-auth.service';

interface WandQuestion {
  text: string;
  options: { answer: string; wand: string }[]
  bgImage: string;
  color?: string
}

@Component({
  selector: 'app-wand',
  templateUrl: './wand.page.html',
  styleUrls: ['./wand.page.scss'],
})
export class WandPage implements OnInit {


  wand: string | null = null;
  selectedOption: string | null = null;
  currentQuestionIndex: number = 0;

  constructor(
    private firebaseAuthService: FirebaesAuthService
  ) { }
  ngOnInit() {
  }

  questions: WandQuestion[] = [
    {
      text: 'First of all, would you describe yourself as...',
      options: [
         { answer: 'Average height',wand: 'Elder'},
         { answer: 'Tall',wand: 'Cypress'}, 
         { answer: 'Short',wand: 'Hazel'} 
        ],
      bgImage: 'https://my.wizardingworld.com/static/media/image1-1920.25fd7d96.jpg',
      color: 'black'
    },
    {
      text: 'And your eyes...',
      options: [
        { answer: 'Dark brown / Black', wand: 'Rowan' },
        { answer: 'Blue', wand: 'Elder' },
        { answer: 'Grey', wand: 'Cypress' },
        { answer: 'Brown', wand: 'Hazel' },
        { answer: 'Hazel', wand: 'Rowan' },
        { answer: 'Blue / Grey', wand: 'Cypress' },
        { answer: 'Green', wand: 'Cypress' },
        { answer: 'Other', wand: 'Hazel' },
        { answer: 'Blue / Green', wand: 'Rowan' },
      ],
      bgImage: 'https://my.wizardingworld.com/static/media/image2-1920.7f940578.jpg',
      color: 'black'
    },
    {
      text: 'Was the day on which you were born...',
      options: [
        { answer: 'An even number', wand: 'Rowan' },
        { answer: 'An odd number', wand: 'Hazel' },
      ],
      bgImage: 'https://my.wizardingworld.com/static/media/image3-1920.e4c66c14.jpg',
      color: 'black'
    },
    {
      text: 'Do you most pride yourself on your...',
      options: [
        { answer: 'Determination', wand: 'Rowan' },
        { answer: 'Imagination' , wand: 'Hazel' },
        { answer: 'Resilience' , wand: 'Cypress' },
        { answer: 'Intelligence' , wand: 'Hazel' },
        { answer: 'Originality' , wand: 'Rowan' },
        { answer: 'Optimism' , wand: 'Cypress' },
        { answer: 'Kindness' , wand: 'Elder' },
      ],
      bgImage: 'https://my.wizardingworld.com/static/media/image7-1920.851e827a.jpg',
      color: 'black'
    },
    {
      text: 'Travelling alone down a deserted road, you reach a crossroads. Do you continue...',
      options: [
        { answer: 'Left towards the sea', wand: 'Rowan' },
        { answer: 'Righ toward the castle' , wand: 'Elder' },
        { answer: 'Ahead towards the forest' , wand: 'Cypress' },
      ],
      bgImage: 'https://my.wizardingworld.com/static/media/image5-1920.7d5c3f1f.jpg',
      color: 'black'
    },
    {
      text: 'Do you most fear...',
      options: [
        { answer: 'Fire', wand: 'Elder' },
        { answer: 'Darkness' , wand: 'Hazel' },
        { answer: 'Isolation' , wand: 'Cypress' },
        { answer: 'Heights' , wand: 'Cypress' },
        { answer: 'Small spaces' , wand: 'Rowan' },
      ],
      bgImage: 'https://my.wizardingworld.com/static/media/image6-1920.9cafac74.jpg',
      color: 'black'
    },
    {
      text: 'In a chest of magical artefacts, which would you choose...',
      options: [
        { answer: 'Silver dagger', wand: 'Elder' },
        { answer: 'Ornate mirror' , wand: 'Hazel' },
        { answer: 'Glittering jewel' , wand: 'Cypress' },
        { answer: 'Bound scroll' , wand: 'Elder' },
        { answer: 'Golden key' , wand: 'Rowan' },
        { answer: 'Dusty bottle' , wand: 'Rowan' },
        { answer: 'Black glove' , wand: 'Hazel' },
      ],
      bgImage: 'https://my.wizardingworld.com/static/media/image4-1920.aad52344.jpg',
      color: 'black'
    },
    
  ]

  selectedWandCounts: { [key: string]: number } = {
    Hazel: 0,
    Cypress: 0,
    Elder: 0,
    Rowan: 0,
  };


  get currentQuestion(): WandQuestion {
    return this.questions[this.currentQuestionIndex];
  }

  selectAnswer(house: string): void {
    setTimeout(()=>{
      this.selectedWandCounts[house]++;
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex >= this.questions.length) {
      this.sortUser();
    }
    },1000)
  }

  sortUser(): void {
    let max = 0;
    console.log(this.selectedWandCounts)
    for (const [currentWand, score] of Object.entries(this.selectedWandCounts)) {
      if (score > max) {
        max = score;
        this.wand = currentWand
      }
    }
    if (this.wand) {
      console.log(this.wand)
      this.firebaseAuthService.addWandToUserProfile(this.wand);
    }
  }

  resetQuiz(): void {
    this.selectedWandCounts = {
      Gryffindor: 0,
      Hufflepuff: 0,
      Ravenclaw: 0,
      Slytherin: 0,
    };
    this.currentQuestionIndex = 0;
  }

}
