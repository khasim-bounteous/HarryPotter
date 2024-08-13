import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserDetails } from '../interface/userauth';
import { getUserDetails } from '../store/Potter.selector';

export const wandGuard: CanActivateFn = (route, state) => {
  const store = inject(Store)
  const router = inject(Router)
  let userDetails !: UserDetails 

  store.select(getUserDetails).subscribe((data) => {
    userDetails = data
  })

  if(userDetails)
  {
    if(userDetails.wand)
    {
      router.navigate(['/profile'])
      return false;
    }
    else
      return true;
  }
  else
    return false
};
