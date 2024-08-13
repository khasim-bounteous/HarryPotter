import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserDetails } from 'src/app/interface/userauth';
import { FirebaesAuthService } from 'src/app/services/firebaes-auth.service';

@Component({
  selector: 'app-sorting-hat',
  templateUrl: './sorting-hat.page.html',
  styleUrls: ['./sorting-hat.page.scss'],
})
export class SortingHatPage implements OnInit {

  constructor(
    private firebaseAuthService: FirebaesAuthService,
    private store: Store<UserDetails>,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}


