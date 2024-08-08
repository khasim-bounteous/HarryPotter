import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JkWritingDetailsPageRoutingModule } from './jk-writing-details-routing.module';

import { JkWritingDetailsPage } from './jk-writing-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JkWritingDetailsPageRoutingModule
  ],
  declarations: [JkWritingDetailsPage]
})
export class JkWritingDetailsPageModule {}
