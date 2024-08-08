import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MagicalNews } from 'src/app/interface/magical-news';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  constructor(
    private potterService: FirebaseService
  ) { }

  writings$ !: Observable<MagicalNews[]>
  
  ngOnInit() {
    this.writings$ = this.potterService.getMagicalNews()
  }
}
