import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { IonicSlides } from '@ionic/angular';
import { UserDetails } from 'src/app/interface/userauth';
import { Store } from '@ngrx/store';
import { getUserDetails } from 'src/app/store/Potter.selector';
// register Swiper custom elements
register();

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit , AfterViewInit {

  @ViewChild('swiper1') swiper1!: ElementRef<any>;
  @ViewChild('swiper2') swiper2!: ElementRef<any>;

  constructor(
    private store: Store<{userDetails:UserDetails}>
  ) {}

  userDetails : UserDetails | null = null
  ngOnInit(): void {
      this.store.select(getUserDetails).subscribe(userDetails =>this.userDetails = userDetails)
  }

  ngAfterViewInit() {
    const swiperParams = {
      breakpoints: {
        100: {
          slidesPerView: 1,
        },
        500:{
          slidesPerView: 2,
        },
        760:{
          slidesPerView: 3,
        },
        920: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
    };

    // now we need to assign all parameters to Swiper element
    Object.assign(this.swiper1.nativeElement, swiperParams);
    this.swiper1.nativeElement.initialize();

    Object.assign(this.swiper2.nativeElement, swiperParams);
    this.swiper2.nativeElement.initialize();
  }
  
}
