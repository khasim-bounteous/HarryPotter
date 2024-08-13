import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SortingHatQuestionsPage } from './sorting-hat-questions.page';

const routes: Routes = [
  {
    path: '',
    component: SortingHatQuestionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SortingHatQuestionsPageRoutingModule {}
