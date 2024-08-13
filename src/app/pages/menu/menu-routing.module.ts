import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';
import { NotFoundPage } from '../not-found/not-found.page';
import { NewsPageModule } from '../news/news.module';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'books',
        loadChildren: () => import('../books/books.module').then( m => m.BooksPageModule)
      },
      {
        path: 'books/:id',
        loadChildren: () => import('../feature-details/book-details/book-details.module').then( m => m.BookDetailsPageModule)
      },
      {
        path: 'films',
        loadChildren: () => import('../films/films.module').then( m => m.FilmsPageModule)
      },
      {
        path: 'films/:id',
        loadChildren: () => import('../feature-details/film-details/film-details.module').then( m => m.FilmDetailsPageModule)
      },
      {
        path: 'jk-rowling-originals',
        loadChildren: () => import('../jk-rowling-originals/jk-rowling-originals.module').then( m => m.JkRowlingOriginalsPageModule)
      },
      {
        path: 'fact-files',
        loadChildren: () => import('../fact-files/fact-files.module').then( m => m.FactFilesPageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('../news/news.module').then( m => m.NewsPageModule)
      },
      {
        path: 'fact-files/:id', 
        loadChildren: () => import('../feature-details/fact-file-details/fact-file-details.module').then( m => m.FactFileDetailsPageModule)
      },
      {
        path: 'jk-rowling-originals/:id',
        loadChildren: () => import('../feature-details/jk-writing-details/jk-writing-details.module').then( m => m.JkWritingDetailsPageModule)
      },  
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule),
  
      },
      { path: '**',
        component: NotFoundPage
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
