import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { Book, Books } from 'src/app/interface/book';
import { FirebaseService } from 'src/app/services/firebase.service';
import { getBooks } from 'src/app/store/Potter.selector';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  books$ !: Observable<Books>
  isLoaded = false
  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.books$ = this.store.select(getBooks).pipe(
      tap(() => this.isLoaded = true)
    )  
  }

}
