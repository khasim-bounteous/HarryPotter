import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WandPage } from './wand.page';

const routes: Routes = [
  {
    path: '',
    component: WandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WandPageRoutingModule {}
