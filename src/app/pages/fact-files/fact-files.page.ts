import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { FactFile, FactFiles } from 'src/app/interface/fact-file';
import { FirebaseService } from 'src/app/services/firebase.service';
import { loadFactFiles } from 'src/app/store/Potter.action';
import { getFactFiles } from 'src/app/store/Potter.selector';

@Component({
  selector: 'app-fact-files',
  templateUrl: './fact-files.page.html',
  styleUrls: ['./fact-files.page.scss'],
})
export class FactFilesPage implements OnInit {

  private subscriptions: Subscription = new Subscription();
  category: string = 'all';
  lastKey: string | null = null;
  limit: number = 20;
  loading = false;
  searchTerm: string = '';

  factFilter = [
    {
      filter: 'all',
      filter_img: 'category-icon-all.svg'
    },
    {
      filter: 'character_pets',
      filter_img: 'category-icon-characters-and-pets-desktop.svg'
    },
    {
      filter: 'objects',
      filter_img: 'category-icon-objects-mobile.svg'
    },
    {
      filter: 'locations',
      filter_img: 'category-icon-locations-mobile.svg'
    },
    {
      filter: 'plants_potions',
      filter_img: 'category-icon-plants-and-potions-mobile.svg'
    },
    {
      filter: 'creatures',
      filter_img: 'category-icon-creatures-mobile.svg'
    },
    {
      filter: 'spells',
      filter_img: 'category-icon-spells.svg'
    },
    {
      filter: 'magical_miscellany',
      filter_img: 'category-icon-magical-miscellany-mobile.svg'
    }
  ]

  factFiles$ !: Observable<FactFile[]>

  constructor(
    private firebaseService: FirebaseService,
    private store: Store<FactFiles>
  ) { }
  ngOnInit() {
    // this.factFiles$ = this.firebaseService.getFactfiles();
    this.factFiles$ = this.store.select(getFactFiles)
  }

  

  loadFactFiles(event?: any) {
    this.loading = true;
    this.store.dispatch(loadFactFiles({category: this.category,searchTerm: this.searchTerm}))
    this.searchTerm = ''
  }

  loadMore() {
    this.loadFactFiles();
  }

  getFactFilesByCategory(category: string) {
    this.category = category;
    this.lastKey = null;
    this.store.dispatch({ type: '[FactFiles] Reset' });
    this.loadFactFiles();
  }
}