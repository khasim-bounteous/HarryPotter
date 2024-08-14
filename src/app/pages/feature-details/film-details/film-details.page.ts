  import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Book } from 'src/app/interface/book';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {

  film$ !: Observable<Book>; // Define an observable for the book details
  isLoaded = false;
  
  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.film$ = this.firebaseService.getFilm(id).pipe(
        tap(()=>this.isLoaded = true),
      )
    }
  }
}
