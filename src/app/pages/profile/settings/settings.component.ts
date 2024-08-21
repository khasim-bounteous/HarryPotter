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
    private store: Store<{ userDetails: UserDetails }>,
    private authService: FirebaesAuthService,
    private toastService: ToastService
  ) { }

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

    const dob = this.editableDetails.dob;

    if (this.editingField == 'dob') {
      if (!dob) {
        this.toastService.presentToast('Please select dob properly', 'danger',5000)
        return
      }
      const currentDate = new Date();
      const selectedDate = new Date(dob);
      const ageDifference = currentDate.getFullYear() - selectedDate.getFullYear();

      if(ageDifference < 13 ||
        (ageDifference === 13 && currentDate < new Date(selectedDate.setFullYear(selectedDate.getFullYear() + 13)))){
         
          this.toastService.presentToast("Wizards and witches must be at least 13 years old to proceed",'danger',5000);
          return
      }

    }
    else if(this.editingField === 'name' && this.editableDetails.firstName?.trim() == '')
    {
      this.toastService.presentToast("First name shouldnt be empty or filled with spaces",'danger',5000)
      return
    }

    this.authService.updateUserDetails(
      this.editableDetails.firstName,
      this.editableDetails.lastName,
      dob
    ).then(() => {
      this.toastService.presentToast(`${this.editingField} updated successfully`);
      this.isEditing = false;
      this.editingField = null;
      this.store.dispatch(loadUserDetails());
    });
  }
}


