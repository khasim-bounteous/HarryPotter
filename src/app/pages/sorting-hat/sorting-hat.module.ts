import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SortingHatPageRoutingModule } from './sorting-hat-routing.module';
import { SortingHatPage } from './sorting-hat.page';
import { register } from 'swiper/element';
import { ComponentsModule } from 'src/app/components/components.module';
// register Swiper custom elements
register();

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SortingHatPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SortingHatPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SortingHatPageModule {}
