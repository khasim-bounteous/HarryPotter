import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserDetails } from 'src/app/interface/userauth';
import { FirebaesAuthService } from 'src/app/services/firebaes-auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { loadUserDetails } from 'src/app/store/Potter.action';
import { getUserDetails } from 'src/app/store/Potter.selector';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  userDetails!: UserDetails;
  editableDetails!: UserDetails;
  isEditing = false;
  editingField: string | null = null;

  constructor(
    private store: Store<{userDetails: UserDetails}>,
    private authService: FirebaesAuthService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.store.select(getUserDetails).subscribe(userDetails => {
      this.userDetails = userDetails;
      this.editableDetails = { ...userDetails };  // Clone the details for editing
    });
  }

  editField(field: string) {
    this.isEditing = true;
    this.editingField = field;
  }

  cancelEdit() {
    this.isEditing = false;
    this.editingField = null;
    this.editableDetails = { ...this.userDetails };  
  }

  saveChanges() {
    this.authService.updateUserDetails(this.editableDetails.firstName, this.editableDetails.lastName, this.editableDetails.dob).then(()=>{
      this.isEditing = false;
      this.editingField = null;
      this.store.dispatch(loadUserDetails())
      this.toastService.presentToast(`${this.editField} updated successfully`)
    })

  }
}
