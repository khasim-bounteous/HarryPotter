import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FactFileDetailsPageRoutingModule } from './fact-file-details-routing.module';

import { FactFileDetailsPage } from './fact-file-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FactFileDetailsPageRoutingModule
  ],
  declarations: [FactFileDetailsPage]
})
export class FactFileDetailsPageModule {}
