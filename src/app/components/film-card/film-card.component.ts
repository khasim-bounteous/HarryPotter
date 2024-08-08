import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/interface/book';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss'],
})
export class FilmCardComponent  implements OnInit {

  constructor() { }
  @Input() film !: Book
  ngOnInit() {}

}
