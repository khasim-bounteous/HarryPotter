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

//   factFilter$ : Observable<Category[]> = of([
//     {
//         "key": "-O3FdNSvqdD3UZg4pLH4",
//         "data": {
//             "filter": "all",
//             "filter_img": "category-icon-all.svg",
//             "name": "all",
//             "color": "rgb(209, 104, 225)"
//         }
//     },
//     {
//         "key": "-O3FdNSyNpqVO9TaOKuo",
//         "data": {
//             "filter": "characters_pets",
//             "filter_img": "category-icon-characters-and-pets-desktop.svg",
//             "name": "characters & pets",
//             "color": "rgb(209, 176, 125)"
//         }
//     },
//     {
//         "key": "-O3FdNSyNpqVO9TaOKup",
//         "data": {
//             "filter": "objects",
//             "filter_img": "category-icon-objects-mobile.svg",
//             "name": "objects",
//             "color": "rgb(209, 176, 125)"
//         }
//     },
//     {
//         "key": "-O3FdNSzHth_itmVXpX8",
//         "data": {
//             "filter": "locations",
//             "filter_img": "category-icon-locations-mobile.svg",
//             "name": "locations",
//             "color": "rgb(209, 176, 125)"
//         }
//     },
//     {
//         "key": "-O3FdNSzHth_itmVXpX9",
//         "data": {
//             "filter": "plants_potions",
//             "filter_img": "category-icon-plants-and-potions-mobile.svg",
//             "name": "plants & potions",
//             "color": "rgb(209, 176, 125)"
//         }
//     },
//     {
//         "key": "-O3FdNT-0leaKJgI1GVA",
//         "data": {
//             "filter": "creatures",
//             "filter_img": "category-icon-creatures-mobile.svg",
//             "name": "creatures",
//             "color": "rgb(209, 176, 125)"
//         }
//     },
//     {
//         "key": "-O3FdNT-0leaKJgI1GVB",
//         "data": {
//             "filter": "spells",
//             "filter_img": "category-icon-spells.svg",
//             "name": "spells",
//             "color": "rgb(209, 176, 125)"
//         }
//     },
//     {
//         "key": "-O3FdNT-0leaKJgI1GVC",
//         "data": {
//             "filter": "magical_miscellany",
//             "filter_img": "category-icon-magical-miscellany-mobile.svg",
//             "name": "magical miscellany",
//             "color": "rgb(209, 176, 125)"
//         }
//     }
// ])

  factFilter$ !: Observable<Category[]>
  factFiles$ !: Observable<FactFile[]>

  constructor(
    private firebaseService: FirebaseService,
    private store: Store<FactFiles>
  ) { }
  ngOnInit() {
    // this.factFiles$ = this.firebaseService.getFactfiles();
    this.factFiles$ = this.store.select(getFactFiles).pipe(tap((data)=>console.log(data)))
    this.factFilter$ = this.firebaseService.getCharacterCategories().pipe(tap((data)=>console.log(data)))
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