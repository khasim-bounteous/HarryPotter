import { Component, Input, OnInit } from '@angular/core';
import { JkOriginal } from 'src/app/interface/jk-original';

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
