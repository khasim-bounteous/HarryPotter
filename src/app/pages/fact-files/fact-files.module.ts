import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FactFilesPageRoutingModule } from './fact-files-routing.module';

import { FactFilesPage } from './fact-files.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FactFilesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FactFilesPage]
})
export class FactFilesPageModule {}
