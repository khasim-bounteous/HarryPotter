import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { JkOriginal} from 'src/app/interface/jk-original';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-jk-writing-details',
  templateUrl: './jk-writing-details.page.html',
  styleUrls: ['./jk-writing-details.page.scss'],
})
export class JkWritingDetailsPage implements OnInit {

  jkOriginal$ !: Observable<JkOriginal>; 
  isLoaded = false;
  
  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.jkOriginal$ = this.firebaseService.getJKrowlingoriginal(id).pipe(
        tap(()=>this.isLoaded = true),
      )
    }
  }

}
