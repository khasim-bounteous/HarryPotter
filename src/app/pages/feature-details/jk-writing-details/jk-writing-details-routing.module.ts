import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JkWritingDetailsPage } from './jk-writing-details.page';

const routes: Routes = [
  {
    path: '',
    component: JkWritingDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JkWritingDetailsPageRoutingModule {}
