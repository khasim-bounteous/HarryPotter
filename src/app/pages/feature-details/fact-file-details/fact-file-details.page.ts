import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FactFile } from 'src/app/interface/fact-file';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-fact-file-details',
  templateUrl: './fact-file-details.page.html',
  styleUrls: ['./fact-file-details.page.scss'],
})
export class FactFileDetailsPage implements OnInit {


  factFile !: FactFile | null
  searchTerm: string = ''


  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService
  ) { }

    ngOnInit() {

      const id = this.route.snapshot.paramMap.get('id') as string;
      
      this.firebaseService.getFactfile(id).subscribe((data)=>{
        this.factFile = data.data != null ? data : null
      })
    }

    onSearch(){
      if(this.searchTerm.trim())
        this.firebaseService.getFactfiles("all",null,this.searchTerm.trim()).subscribe(data=>{
          this.factFile = data.length >0 ? data[0] : null
        })
    }

}

