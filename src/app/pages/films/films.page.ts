import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { Book } from 'src/app/interface/book';
import { Films } from 'src/app/interface/film';
import { FirebaseService } from 'src/app/services/firebase.service';
import { getFilms } from 'src/app/store/Potter.selector';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  films$ !: Observable<Films>
  isLoaded = false;

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.films$ = this.store.select(getFilms).pipe(
      tap(()=>this.isLoaded = true),
    )
  }
}
