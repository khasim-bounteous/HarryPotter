import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { BookCardComponent } from './book-card/book-card.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { WritingCardComponent } from './writing-card/writing-card.component';
import { FactCardComponent } from './fact-card/fact-card.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    BookCardComponent,
    FilmCardComponent,
    WritingCardComponent,
    FactCardComponent,
    ProfileHeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    BookCardComponent,
    FilmCardComponent,
    WritingCardComponent,
    FactCardComponent
  ]
})
export class ComponentsModule { }
