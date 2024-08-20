import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserDetails } from '../interface/userauth';
import { getUserDetails } from '../store/Potter.selector';
import { ToastService } from '../services/toast.service';
import { FirebaesAuthService } from '../services/firebaes-auth.service';

export const sortingHatGuard: CanActivateFn = (route, state) => {
  const store = inject(Store)
  const firebaseService = inject(FirebaesAuthService)
  const router = inject(Router)
  const toastService = inject(ToastService)
  let userDetails !: UserDetails 

  store.select(getUserDetails).subscribe((data) => {
    userDetails = data
  })

  // firebaseService.getUserDetails().then((userDetails) => {
  //   userDetails = userDetails
  // })
  
  if(userDetails)
    {
      if(userDetails.house)
      {
        router.navigate(['/profile'])
        toastService.presentToast(`You have been sorted into ${userDetails.house}`)
        return false;
      }
      else
        return true;  
    }
    else
    {
      toastService.presentToast('Please login for Sorting Hat ceremony')
      router.navigate(['/login']);
      return false
    }
};
