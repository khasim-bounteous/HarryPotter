import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SortingHatQuestionsPageRoutingModule } from './sorting-hat-questions-routing.module';
import { SortingHatQuestionsPage } from './sorting-hat-questions.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SortingHatQuestionsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SortingHatQuestionsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SortingHatQuestionsPageModule {}
