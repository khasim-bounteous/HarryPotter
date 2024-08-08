import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SortingHatPage } from './sorting-hat.page';

const routes: Routes = [
  {
    path: '',
    component: SortingHatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SortingHatPageRoutingModule {}
