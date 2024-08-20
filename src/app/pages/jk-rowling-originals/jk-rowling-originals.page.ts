import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { JKOriginal, JKOriginals } from 'src/app/interface/jk-original';
import { FirebaseService } from 'src/app/services/firebase.service';
import { getJkOrignals } from 'src/app/store/Potter.selector';

@Component({
  selector: 'app-jk-rowling-originals',
  templateUrl: './jk-rowling-originals.page.html',
  styleUrls: ['./jk-rowling-originals.page.scss'],
})
export class JkRowlingOriginalsPage implements OnInit {

  constructor(
    private store: Store
  ) { }

  writings$ !: Observable<JKOriginals>
  isLoaded = false;

  
  ngOnInit() {
    this.writings$ = this.store.select(getJkOrignals).pipe(
      tap(()=>this.isLoaded = true)
    )
  }

}
