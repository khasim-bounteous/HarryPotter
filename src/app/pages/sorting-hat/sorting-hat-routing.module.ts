import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SortingHatPage } from './sorting-hat.page';
import { sortingHatGuard } from 'src/app/guards/sorting-hat.guard';

const routes: Routes = [
  {
    path: '',
    component: SortingHatPage
  },
  {
    path: 'questions',
    loadChildren: () => import('./sorting-hat-questions/sorting-hat-questions.module').then( m => m.SortingHatQuestionsPageModule),
    canActivate: [sortingHatGuard]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SortingHatPageRoutingModule {}
