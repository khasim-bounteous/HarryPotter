import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/interface/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent  implements OnInit {

  constructor() { }
  @Input() cardData !: Book
  ngOnInit() {}

}
