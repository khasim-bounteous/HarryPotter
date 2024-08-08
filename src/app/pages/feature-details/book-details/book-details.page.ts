import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Book } from 'src/app/interface/book';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
})
export class BookDetailsPage implements OnInit {

  book$ !: Observable<Book>; // Define an observable for the book details
  isLoaded = false

  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.book$ = this.firebaseService.getBookById(id).pipe(
        tap(()=>this.isLoaded = true),
      )
    }
  }
}
