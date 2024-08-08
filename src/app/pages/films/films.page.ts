import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Book } from 'src/app/interface/book';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  films$ !: Observable<Book[]>;
  isLoaded = false;

  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.films$ = this.firebaseService.getFilms().pipe(
      tap(()=>this.isLoaded = true),
    )
  }
}
