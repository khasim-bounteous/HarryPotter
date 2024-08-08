import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterPetsPageRoutingModule } from './character-pets-routing.module';

import { CharacterPetsPage } from './character-pets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterPetsPageRoutingModule
  ],
  declarations: [CharacterPetsPage]
})
export class CharacterPetsPageModule {}
