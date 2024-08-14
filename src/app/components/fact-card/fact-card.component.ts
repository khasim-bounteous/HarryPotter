import { Component, Input, OnInit } from '@angular/core';
import { FactFile } from 'src/app/interface/fact-file';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-fact-card',
  templateUrl: './fact-card.component.html',
  styleUrls: ['./fact-card.component.scss'],
})
export class FactCardComponent implements OnInit {

  constructor() { }
  @Input() factFile !: FactFile

  categoryThemes = environment.categoryThemes
  
  ngOnInit() {
  }

}
