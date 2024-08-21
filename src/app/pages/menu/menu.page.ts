import { Component, HostListener, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { FactFiles } from 'src/app/interface/fact-file';
import { FirebaesAuthService } from 'src/app/services/firebaes-auth.service';
import { loadBooks, loadFactFiles, loadFilms, loadJKOriginals, loadUserDetails } from 'src/app/store/Potter.action';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  userLoggedIn = true;
  

  menuItems = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title:'J.k. Rowling Archive',
      path: '/jk-rowling-originals',
    },
    {
      title:'Films',
      path: '/films',
    },
    {
      title:'books',
      path: '/books',
    },
    {
      title:'Fact-files',
      path: '/fact-files',
    },
    {
      title:'Hogwarts sorting',
      path: '/sorting-hat',
    },
    {
      title:'Profile',
      path: '/profile',
    },
  ]

  constructor(
    private menu: MenuController,
    private plt: Platform,
    private  store: Store,  
    private firebaeAuthService: FirebaesAuthService
    
  ) { 
  }

  ngOnInit() {
    const width = this.plt.width();
    this.toggleMenu(width);
    this.initialize()
    
  }

  initialize(){
    this.store.dispatch(loadFactFiles({category: "all",searchTerm: null}));
    this.store.dispatch(loadUserDetails());
    this.store.dispatch(loadBooks())
    this.store.dispatch(loadFilms())
    this.store.dispatch(loadJKOriginals())
  }

  onLogout(){
    this.firebaeAuthService.logout()
  }

  toggleMenu(width:number){
    if(width > 980){
      this.menu.enable(false,'myMenu')
    }
    else{
      this.menu.enable(true,'myMenu')
    }
  }


  @HostListener('window:resize',['$event'])
  onResize(event:any){
    const newWidth = event.target.innerWidth;
    this.toggleMenu(newWidth)
  }

}