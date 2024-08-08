import { Inject, inject } from '@angular/core';
import { CanActivateFn,Router,ActivatedRouteSnapshot,RouterStateSnapshot, Route } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserauthService } from '../services/userauth.service';

export const AuthGuard: CanActivateFn = () => {
  
  const authService = inject(UserauthService)

  return authService.getUserProfile().pipe(
    map(userObject => {
      if (userObject && userObject.id) {
        return true;
      } else {
        return false;
      }
    })    
  );
};
