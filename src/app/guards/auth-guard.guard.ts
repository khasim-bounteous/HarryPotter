import { Inject, inject } from '@angular/core';
import { CanActivateFn,Router,ActivatedRouteSnapshot,RouterStateSnapshot, Route } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserauthService } from '../services/userauth.service';
import { Store } from '@ngrx/store';
import { UserDetails } from 'src/app/interface/userauth';
import { getUserDetails } from '../store/Potter.selector';

export const AuthGuard: CanActivateFn = () => {
  
  const authService = inject(UserauthService)
  const store = inject(Store)
  const router = inject(Router)
  let userDetails !: UserDetails 

  store.select(getUserDetails).subscribe((data) => {
    userDetails = data
  })
  console.log(userDetails)
  if(userDetails && userDetails.email)
    return true;
  else{
    router.navigate(['/profile'])
    return false;
  }
};
