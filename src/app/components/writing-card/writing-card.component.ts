import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-writing-card',
  templateUrl: './writing-card.component.html',
  styleUrls: ['./writing-card.component.scss'],
})
export class WritingCardComponent  implements OnInit {

  constructor() { }
  @Input() writingData !: any
  
  ngOnInit() {}

}
