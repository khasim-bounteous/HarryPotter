import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Book } from 'src/app/interface/book';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  books$ !: Observable<Book[]>
  isLoaded = false
  constructor(
    private firbaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.books$ = this.firbaseService.getBooks().pipe(
      tap(() => this.isLoaded = true)
    )  
  }

}
