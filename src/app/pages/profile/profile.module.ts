import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { SettingsComponent } from './settings/settings.component';
import { ThingsTodoComponent } from './things-todo/things-todo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
  ],
  declarations: [
    ProfilePage,
    SettingsComponent,
    ThingsTodoComponent
  ]
})
export class ProfilePageModule {}
