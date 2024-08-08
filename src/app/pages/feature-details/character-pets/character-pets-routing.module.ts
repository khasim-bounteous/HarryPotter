import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterPetsPage } from './character-pets.page';

const routes: Routes = [
  {
    path: '',
    component: CharacterPetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterPetsPageRoutingModule {}
