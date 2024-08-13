import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserDetails } from 'src/app/interface/userauth';
import { FirebaesAuthService } from 'src/app/services/firebaes-auth.service';
import { loadUserDetails } from 'src/app/store/Potter.action';

interface WandQuestion {
  text: string;
  options: { answer: string; house: string; image: string }[];
  bgImage: string;
  frame?: string;
  color?: string
}

@Component({
  selector: 'app-sorting-hat',
  templateUrl: './sorting-hat.page.html',
  styleUrls: ['./sorting-hat.page.scss'],
})
export class SortingHatPage implements OnInit {

  constructor(
    private firebaseAuthService: FirebaesAuthService,
    private store: Store<UserDetails>,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  house: string | null = null;
  questions: WandQuestion[] = [
    {
      text: 'If you could have any power, which would you choose?',
      options: [
        { answer: 'The power to read minds', house: 'Gryffindor', image: 'https://my.wizardingworld.com/static/media/read_mind@2x.43912caf.png' },
        { answer: 'The power to read minds', house: 'Slytherin', image: 'https://my.wizardingworld.com/static/media/change_past@2x.c3154212.png' },
        { answer: 'The power to read minds', house: 'Hufflepuff', image: 'https://my.wizardingworld.com/static/media/invisibility@2x.a3f7f378.png' },
        { answer: 'The power to read minds', house: 'Ravenclaw', image: 'https://my.wizardingworld.com/static/media/speak_to_animal.9736eef4.png' }
      ],
      bgImage: 'https://my.wizardingworld.com/static/media/bg@2x.7a83e923.png',
      frame: 'https://my.wizardingworld.com/static/media/mask.264240a5.png'
    },
    {
      text: 'How would you like to be known to history?',
      options: [
        { answer: 'The Bold', house: 'Gryffindor', image: 'https://my.wizardingworld.com/static/media/bold@2x.b270566a.png' },
        { answer: 'The Wise', house: 'Hufflepuff', image: 'https://my.wizardingworld.com/static/media/wise@2x.484ece43.png' },
        { answer: 'The Good', house: 'Ravenclaw', image: 'https://my.wizardingworld.com/static/media/good@2x.50be3816.png' },
        { answer: "The Great", house: 'Slytherin', image: 'https://my.wizardingworld.com/static/media/great@2x.10bb46fe.png' },
      ],
      bgImage: 'https://my.wizardingworld.com/static/media/bg-stars@2x.116cc9fe.jpg',
      frame: 'https://my.wizardingworld.com/static/media/bg.83364fc0.png',
      color: '#e7e7e7'
    },
    {
      text: 'After you have died, what would you most like people to do when they hear your name?',
      options: [
        { answer: 'Ask for more stories about your adventures', house: 'Gryffindor', image: 'https://my.wizardingworld.com/static/media/item2@2x.db8acbab.png' },
        { answer: 'Miss you, but smile', house: 'Hufflepuff', image: 'https://my.wizardingworld.com/static/media/item1@2x.5cbc024b.png' },
        { answer: 'Think with admiration of your achievements', house: 'Ravenclaw', image: 'https://my.wizardingworld.com/static/media/item3@2x.dde19061.png' },
        { answer: "I don't care what people think of me after I'm dead; it's what they think of me while I'm alive that counts", house: 'Slytherin', image: 'https://my.wizardingworld.com/static/media/item3@2x.dde19061.png' },
      ],
      bgImage: 'https://my.wizardingworld.com/static/media/stars.6b7642f0.png',
      frame: 'https://my.wizardingworld.com/static/media/mask.7c87512f.png',
      color: '#e7e7e7'
    },
    {
      text: 'Late at night, walking alone down the street, you hear a peculiar cry that you believe to have a magical source. Do you:',
      options: [
        { answer: 'Draw your wand and stand your ground?', house: 'Gryffindor', image: 'https://my.wizardingworld.com/static/media/caution@2x.3374b39f.png' },
        { answer: 'Proceed with caution, keeping one hand on your concealed wand and an eye out for any disturbance?', house: 'Hufflepuff', image: 'https://my.wizardingworld.com/static/media/shadows@2x.fba40585.png' },
        { answer: 'Withdraw into the shadows to await developments, while mentally reviewing the most appropriate defensive and offensive spells, should trouble occur?', house: 'Ravenclaw', image: 'https://my.wizardingworld.com/static/media/discover@2x.2f1acb2e.png' },
        { answer: 'Draw your wand and try to discover the source of the noise?', house: 'Slytherin', image: 'https://my.wizardingworld.com/static/media/caution@2x.3374b39f.png' },
      ],
      bgImage: 'https://my.wizardingworld.com/static/media/bg@2x.7a83e923.png',
    },
    {
      text: 'A Muggle confronts you and says that they are sure you are a witch or wizard. Do you:',
      options: [
        { answer: 'Ask what makes them think so?', house: 'Gryffindor', image: 'https://my.wizardingworld.com/static/media/item1@2x.1a93c5bf.png' },
        { answer: 'Tell them that you are worried about their mental health, and offer to call a doctor.', house: 'Hufflepuff', image: 'https://my.wizardingworld.com/static/media/item4@2x.7c113623.png' },
        { answer: "Agree, and ask whether they'd like a free sample of a jinx?", house: 'Hufflepuff', image: 'https://my.wizardingworld.com/static/media/item2@2x.3bbb0ad4.png' },
        { answer: 'Agree, and walk away, leaving them to wonder whether you are bluffing?', house: 'Hufflepuff', image: 'https://my.wizardingworld.com/static/media/item3@2x.45c38b61.png' }
      ],
      bgImage: 'https://my.wizardingworld.com/static/media/bg-stars@2x.116cc9fe.jpg',
      frame: 'https://my.wizardingworld.com/static/media/mask.592a8be7.png',
      color: '#c79552'
    },
    {
      text: 'If you were attending Hogwarts, which pet would you choose to take with you?',
      options: [
        { answer: 'Cats', house: 'Gryffindor', image: 'https://my.wizardingworld.com/static/media/cat@2x.9caf18ee.png' },
        { answer: 'Toads', house: 'Hufflepuff', image: 'https://my.wizardingworld.com/static/media/toad@2x.51fb4db6.png' },
        { answer: 'Owls', house: 'Ravenclaw', image: 'https://my.wizardingworld.com/static/media/owl@2x.793a5c37.png' },
      ],
      bgImage: 'https://my.wizardingworld.com/static/media/stars.6b7642f0.png',
    },
    {
      text: 'If you were attending Hogwarts, which pet would you choose to take with you?',
      options: [
        { answer: 'Barn owl', house: 'Gryffindor', image: 'https://my.wizardingworld.com/static/media/BarnOwl.9327958f.png' },
        { answer: 'Tawny owl', house: 'Hufflepuff', image: 'https://my.wizardingworld.com/static/media/TawnyOwl.6a4af58d.png' },
        { answer: 'Snowy owl', house: 'Ravenclaw', image: 'https://my.wizardingworld.com/static/media/SnowyOwl.2bbe33dd.png' },
        { answer: "Screech owl", house: 'Slytherin', image: 'https://my.wizardingworld.com/static/media/ScreechOwl.0731be5f.png' },
      ],
      bgImage: 'https://my.wizardingworld.com/static/media/stars.6b7642f0.png',
    },
    {
      text: 'What are you most looking forward to learning at Hogwarts?',
      options: [
        { answer: 'All about magical creatures, and how to befriend/care for them', house: 'Gryffindor', image: 'https://my.wizardingworld.com/static/media/magical_creatures@2x.b3f886e2.png' },
        { answer: 'Flying on a broomstick', house: 'Hufflepuff', image: 'https://my.wizardingworld.com/static/media/flying-broomstick@2x.b84f0bd7.png' },
        { answer: 'Apparition and Disapparition (being able to materialize and dematerialize at will)', house: 'Ravenclaw', image: 'https://my.wizardingworld.com/static/media/apparition_disapparition@2x.68455128.png' },
        { answer: 'Secrets about the castle', house: 'Slytherin', image: 'https://my.wizardingworld.com/static/media/secrets_about_castle@2x.ab8f952b.png' },
      ],
      bgImage: 'https://my.wizardingworld.com/static/media/stars.6b7642f0.png',
      frame: 'https://my.wizardingworld.com/static/media/mask.c5a489f5.png',
      color: '#27403c'
    }
  ];

  selectedAnswers: { [key: string]: number } = {
    Gryffindor: 0,
    Hufflepuff: 0,
    Ravenclaw: 0,
    Slytherin: 0,
  };


  currentQuestionIndex: number = 0;

  get currentQuestion(): WandQuestion {
    return this.questions[this.currentQuestionIndex];
  }

  selectAnswer(house: string): void {
    this.selectedAnswers[house]++;
    this.currentQuestionIndex++;
    console.log(this.currentQuestionIndex, this.questions.length)
    if (this.currentQuestionIndex >= this.questions.length) {
      this.sortUser();
    }
  }

  sortUser(): void {
    let max = 0;

    for (const [currentHouse, score] of Object.entries(this.selectedAnswers)) {
      if (score > max) {
        max = score;
        this.house = currentHouse;
      }
    }
    if (this.house) {
      this.firebaseAuthService.addHouseToUserProfile(this.house).then(()=>{
        this.store.dispatch(loadUserDetails())
      })
      this.router.navigate(['/profile'])
    }
  }

  resetQuiz(): void {
    this.selectedAnswers = {
      Gryffindor: 0,
      Hufflepuff: 0,
      Ravenclaw: 0,
      Slytherin: 0,
    };
    this.currentQuestionIndex = 0;
  }
}




// questions: Question[] = [
//   {
//     text: 'Which quality do you value the most?',
//     options: [
//       { answer: 'Bravery', house: 'Gryffindor',image: 'https://my.wizardingworld.com/static/media/caution@2x.3374b39f.png' },
//       { answer: 'Loyalty', house: 'Hufflepuff', image: 'https://my.wizardingworld.com/static/media/shadows@2x.fba40585.png'},
//       { answer: 'Wisdom', house: 'Ravenclaw',image: 'https://my.wizardingworld.com/static/media/discover@2x.2f1acb2e.png' },
//       { answer: 'Ambition', house: 'Slytherin',image: 'https://my.wizardingworld.com/static/media/caution@2x.3374b39f.png' },
//     ],
//     bgImage: 'https://my.wizardingworld.com/static/media/bg-stars@2x.116cc9fe.jpg'
//   },
//   {
//     text: 'Which subject at Hogwarts interests you the most?',
//     options: [
//       { answer: 'Defense Against the Dark Arts', house: 'Gryffindor' },
//       { answer: 'Herbology', house: 'Hufflepuff' },
//       { answer: 'Astronomy', house: 'Ravenclaw' },
//       { answer: 'Potions', house: 'Slytherin' },
//     ],
//       bgImage: 'https://my.wizardingworld.com/static/media/bg@2x.7a83e923.png'
//   },
//   // {
//   //   text: 'What would you do if you found a magical object?',
//   //   options: [
//   //     { answer: 'Use it for good', house: 'Gryffindor' },
//   //     { answer: 'Keep it safe', house: 'Hufflepuff' },
//   //     { answer: 'Study it carefully', house: 'Ravenclaw' },
//   //     { answer: 'Use it for your advantage', house: 'Slytherin' },
//   //   ],
//   // },
//   // {
//   //   text: 'How would you describe your group of friends?',
//   //   options: [
//   //     { answer: 'Brave and daring', house: 'Gryffindor' },
//   //     { answer: 'Trustworthy and kind', house: 'Hufflepuff' },
//   //     { answer: 'Intelligent and creative', house: 'Ravenclaw' },
//   //     { answer: 'Ambitious and resourceful', house: 'Slytherin' },
//   //   ],
//   // },
//   // {
//   //   text: 'What do you fear the most?',
//   //   options: [
//   //     { answer: 'Failure', house: 'Gryffindor' },
//   //     { answer: 'Being left out', house: 'Hufflepuff' },
//   //     { answer: 'Ignorance', house: 'Ravenclaw' },
//   //     { answer: 'Powerlessness', house: 'Slytherin' },
//   //   ],
//   // },
//   // {
//   //   text: 'What’s your preferred method of solving a problem?',
//   //   options: [
//   //     { answer: 'Facing it head-on', house: 'Gryffindor' },
//   //     { answer: 'Working together', house: 'Hufflepuff' },
//   //     { answer: 'Thinking it through', house: 'Ravenclaw' },
//   //     { answer: 'Finding a loophole', house: 'Slytherin' },
//   //   ],
//   // },
//   // {
//   //   text: 'What would you do on a free weekend?',
//   //   options: [
//   //     { answer: 'Go on an adventure', house: 'Gryffindor' },
//   //     { answer: 'Spend time with friends', house: 'Hufflepuff' },
//   //     { answer: 'Read a good book', house: 'Ravenclaw' },
//   //     { answer: 'Plan for the future', house: 'Slytherin' },
//   //   ],
//   // },
//   // {
//   //   text: 'Which magical creature do you find the most fascinating?',
//   //   options: [
//   //     { answer: 'Phoenix', house: 'Gryffindor' },
//   //     { answer: 'Niffler', house: 'Hufflepuff' },
//   //     { answer: 'Hippogriff', house: 'Ravenclaw' },
//   //     { answer: 'Basilisk', house: 'Slytherin' },
//   //   ],
//   // },
// ];
