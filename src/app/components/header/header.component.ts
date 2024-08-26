import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FactFile } from 'src/app/interface/fact-file';
import { FirebaesAuthService } from 'src/app/services/firebaes-auth.service';
import { resetFactFiles, resetUserDetails } from 'src/app/store/Potter.action';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  userLoggedIn = false;
  constructor(
    private firebaseAuthService: FirebaesAuthService,
    private store: Store<FactFile>
  ){}

  ngOnInit(): void {

  }

  onLogout(){
    this.store.dispatch(resetFactFiles())
    this.store.dispatch(resetUserDetails())
    this.firebaseAuthService.logout()
  }


}
