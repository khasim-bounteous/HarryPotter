import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, catchError, exhaustMap, from, map, of, switchMap, tap, withLatestFrom } from "rxjs";
import { FirebaseService } from "../services/firebase.service";
import { LOAD_FACTFILES, LOAD_USER_DETAILS, loadFactFiles, loadFactFilesSuccess, loadUserDetailsSuccess } from "./Potter.action";
import { Store } from "@ngrx/store";
import {FactFiles } from "../interface/fact-file";
import { getFactFileLastKey } from "./Potter.selector";
import { UserDetails } from "../interface/userauth";
import { FirebaesAuthService } from "../services/firebaes-auth.service";

@Injectable()
export class PotterEffect{

    constructor(
        private actions$: Actions,
        private potterService: FirebaseService,
        private firebaseService: FirebaesAuthService,
        private store: Store<{FactFiles:FactFiles,userDetails: UserDetails}>
    ){}

    _factFiles = createEffect(() => {
        return this.actions$.pipe(
          ofType(LOAD_FACTFILES),
          withLatestFrom(this.store.select(getFactFileLastKey)), 
          switchMap(([action, lastKey]) => {
            let { category,searchTerm } = action as { category: string,searchTerm: string | null }; 
            if(searchTerm === '')
              searchTerm =null;
            return this.potterService.getFactfiles(category,lastKey,searchTerm).pipe(
              map((data) => loadFactFilesSuccess({ factFiles: data,searchTerm: searchTerm })),
              catchError(() => EMPTY)
            );
          })
        );
      });

      _loadUserDetails$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(LOAD_USER_DETAILS),
          switchMap(() => {
            return from(this.firebaseService.getUserDetails()).pipe(
              map((userDetails: UserDetails) => loadUserDetailsSuccess({ userDetails })),
              catchError(error => of({ type: '[User] Load User Details Failure', error })) // Handle error appropriately
            );
          })
        );
      });
      
}

// this.firebaseService.getFactfiles(this.category, this.lastKey, this.limit).subscribe(factFiles => {
//     this.factFiles = [...this.factFiles, ...factFiles];

//     if (factFiles.length > 0) {
//       this.lastKey = factFiles[factFiles.length - 1].key;
//     }

//     this.loading = false;
//     if (event) {
//       event.target.complete();
//     }
//   });