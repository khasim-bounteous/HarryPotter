import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserDetails } from '../interface/userauth';
import { getUserDetails } from '../store/Potter.selector';
import { FirebaesAuthService } from '../services/firebaes-auth.service';
import { ToastService } from '../services/toast.service';

export const wandGuard: CanActivateFn = (route, state) => {
  const store = inject(Store)
  const router = inject(Router)
  const toastService = inject(ToastService)
  const firebaseService = inject(FirebaesAuthService)
  let userDetails !: UserDetails 


  store.select(getUserDetails).subscribe((data) => {
    userDetails = data
  })

  if(userDetails)
  {
    if(userDetails.wand)
    {
      router.navigate(['/profile'])
      toastService.presentToast(`${userDetails.wand} have been choosen you`)
      return false;
    }
    else
      return true;
  }
  else
  {
    toastService.presentToast('Please login for choosing Wand')
    router.navigate(['/login']);
    return false
  }
};
