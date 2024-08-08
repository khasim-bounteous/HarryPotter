import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FactFilesPage } from './fact-files.page';

const routes: Routes = [
  {
    path: '',
    component: FactFilesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactFilesPageRoutingModule {}
