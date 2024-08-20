import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, Subscription, tap } from 'rxjs';
import { Category } from 'src/app/interface/category';
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
  isLoaded = false;


  factFilter$ !: Observable<Category[]>
  factFiles$ !: Observable<FactFile[]>

  constructor(
    private firebaseService: FirebaseService,
    private store: Store<FactFiles>
  ) { }
  ngOnInit() {
    this.factFiles$ = this.store.select(getFactFiles).pipe(
      tap(()=>this.isLoaded = true),
    )
    this.factFilter$ = this.firebaseService.getCharacterCategories()
  }

  

  loadFactFiles(event?: any) {
    this.loading = true;
    this.store.dispatch(loadFactFiles({category: this.category,searchTerm: this.searchTerm.trim()}))
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