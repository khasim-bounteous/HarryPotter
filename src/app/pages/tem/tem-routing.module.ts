import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemPage } from './tem.page';

const routes: Routes = [
  {
    path: '',
    component: TemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemPageRoutingModule {}
