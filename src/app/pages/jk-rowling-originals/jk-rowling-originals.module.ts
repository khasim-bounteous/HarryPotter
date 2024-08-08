import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JkRowlingOriginalsPageRoutingModule } from './jk-rowling-originals-routing.module';

import { JkRowlingOriginalsPage } from './jk-rowling-originals.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JkRowlingOriginalsPageRoutingModule,
    ComponentsModule
],
  declarations: [JkRowlingOriginalsPage]
})
export class JkRowlingOriginalsPageModule {}
