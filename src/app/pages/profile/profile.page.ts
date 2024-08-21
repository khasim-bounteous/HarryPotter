import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserDetails } from 'src/app/interface/userauth';
import { FirebaesAuthService } from 'src/app/services/firebaes-auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { loadUserDetails } from 'src/app/store/Potter.action';
import { getUserDetails } from 'src/app/store/Potter.selector';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private store: Store<{userDetails: UserDetails}>,
    private firebaseAuth: FirebaesAuthService,
    private toastService: ToastService
  ) { }

  settingOpen = false;
  userDetails : UserDetails | null = null;
  avatar: string | null | undefined = null;
  otherAvatars: string[] = [];
  isAvatarChanged = false;

  avatars = [
    "avatar1.png",
    "avatar2.png",
    "avatar3.png",
    "avatar4.png",
  ];

  ngOnInit() {
    this.store.select(getUserDetails).subscribe(userDetails => {
      if (userDetails) {
        this.userDetails = userDetails;
        this.avatar = userDetails.avatar;
        this.updateOtherAvatars();
      }
    });
  }

  updateOtherAvatars() {
    this.otherAvatars = this.avatars.filter(avatar => avatar !== this.avatar);
  }

  updateAvatar(newAvatar: string) {
    this.avatar = newAvatar;
    this.isAvatarChanged = true;
    this.updateOtherAvatars(); 
  }

  saveChanges(){
    this.firebaseAuth.changeAvatar(this.avatar).then(()=>{
      this.toastService.presentToast("Avatar updated successfully")
      this.store.dispatch(loadUserDetails())
      this.isAvatarChanged = false
    })
    .catch(()=>{
      this.toastService.presentToast("Updation failed","danger",4000)
    })
  }

  cancelChanges(){
    this.isAvatarChanged = false;
    this.avatar = this.userDetails?.avatar
    this.updateOtherAvatars()
  }

}
