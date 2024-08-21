import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-tem',
  templateUrl: './tem.page.html',
  styleUrls: ['./tem.page.scss'],
})
export class TemPage implements OnInit {

  constructor(
    private firebaseService: FirebaseService
  ) { }

  
   data = [];
  ngOnInit() {
    this.firebaseService.getBooks().subscribe(data=>console.log(data))
    console.log("hello")
  }

  addData(){
    console.log("working")
    this.firebaseService.addData(this.data)
  }
}
