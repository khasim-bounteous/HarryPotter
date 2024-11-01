import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JkRowlingOriginalsPage } from './jk-rowling-originals.page';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: JkRowlingOriginalsPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  exports: [RouterModule],
})
export class JkRowlingOriginalsPageRoutingModule {}
