import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { JkOriginal } from 'src/app/interface/jk-original';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-jk-rowling-originals',
  templateUrl: './jk-rowling-originals.page.html',
  styleUrls: ['./jk-rowling-originals.page.scss'],
})
export class JkRowlingOriginalsPage implements OnInit {

  constructor(
    private potterService: FirebaseService
  ) { }

  writings$ !: Observable<JkOriginal[]>
  isLoaded = false;

  
  ngOnInit() {
    this.writings$ = this.potterService.getJKrowlingoriginals().pipe(
      tap(()=>this.isLoaded = true),
    )
  }

}
