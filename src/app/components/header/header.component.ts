import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaesAuthService } from 'src/app/services/firebaes-auth.service';
// import { localStorageToken } from 'src/app/javascriptapis/localstorage.token';
// import { SnackbarService } from 'src/app/services/snackbar.service';
// import { UserauthService } from 'src/app/services/userauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  userLoggedIn = false;
  constructor(
    private router: Router,
    private firebaseAuthService: FirebaesAuthService
  ){}

  ngOnInit(): void {
    // if(this.storage.getItem('access_token'))
    //   this.userLoggedIn = true; 
  }

  onLogout(){
    this.firebaseAuthService.logout()
    this.router.navigate(['/login'])
  }
  @Input() title !:string 
  dropdown = false;
  @ViewChild('productbtn',{read:ElementRef}) productbtn !:ElementRef;

  hideDropdown(event:any){
    const xTouch = (event.clientX).toFixed(2)
    const yTouch = (event.clientY).toFixed(2)

    const rect = this.productbtn.nativeElement.getBoundingClientRect();
    const topBoundary = (rect.top + 2).toFixed(2);
    const leftBoundary = (rect.left + 2).toFixed(2);
    const rightBoundary = (rect.right - 2).toFixed(2);
    // console.log(rect)

    if(xTouch<leftBoundary || xTouch>rightBoundary || yTouch<topBoundary)
      this.dropdown = false
  }
}
