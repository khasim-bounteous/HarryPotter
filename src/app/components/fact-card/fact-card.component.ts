import { Component, Input, OnInit } from '@angular/core';
import { FactFile } from 'src/app/interface/fact-file';

@Component({
  selector: 'app-fact-card',
  templateUrl: './fact-card.component.html',
  styleUrls: ['./fact-card.component.scss'],
})
export class FactCardComponent  implements OnInit {

  constructor() { }
  @Input() factFile !: FactFile
  
  ngOnInit() {}

}
