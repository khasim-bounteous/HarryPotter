import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemPageRoutingModule } from './tem-routing.module';

import { TemPage } from './tem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemPageRoutingModule
  ],
  declarations: [TemPage]
})
export class TemPageModule {}
