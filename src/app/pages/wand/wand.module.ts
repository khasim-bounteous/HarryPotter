import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WandPageRoutingModule } from './wand-routing.module';

import { WandPage } from './wand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WandPageRoutingModule
  ],
  declarations: [WandPage]
})
export class WandPageModule {}
