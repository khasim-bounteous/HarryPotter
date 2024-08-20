import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, catchError, exhaustMap, from, map, of, switchMap, tap, withLatestFrom } from "rxjs";
import { FirebaseService } from "../services/firebase.service";
import { LOAD_BOOKS, LOAD_FACTFILES, LOAD_USER_DETAILS, loadBookSuccess, loadFactFiles, loadFactFilesSuccess, loadFilms, loadFilmSuccess, loadJKOriginals, loadJKOriginalSuccess, loadUserDetailsSuccess } from "./Potter.action";
import { Store } from "@ngrx/store";
import {FactFiles } from "../interface/fact-file";
import { getFactFileLastKey } from "./Potter.selector";
import { UserDetails } from "../interface/userauth";
import { FirebaesAuthService } from "../services/firebaes-auth.service";
import { Book } from "../interface/book";
import { Film } from "../interface/film";
import { JKOriginal } from "../interface/jk-original";

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

      _loadBooks$ = createEffect(()=>{
        return this.actions$.pipe(
          ofType(LOAD_BOOKS),
          switchMap(()=>{
            return from(this.potterService.getBooks()).pipe(
              map((books:Book[])=>loadBookSuccess({books})),
              catchError(error => of({ type: '[books] Load books Failure', error })) // Handle error appropriately
            )
          })
        )
      })

      _loadFilms$ = createEffect(()=>{
        return this.actions$.pipe(
          ofType(loadFilms),
          switchMap(()=>{
            return from(this.potterService.getFilms()).pipe(
              map((films:Film[])=>loadFilmSuccess({films})),
              catchError(error => of({ type: '[films] Load films Failure', error })) // Handle error appropriately
            )
          })
        )
      })

      _loadOginals$ = createEffect(()=>{
        return this.actions$.pipe(
          ofType(loadJKOriginals),
          switchMap(()=>{
            return from(this.potterService.getJKrowlingoriginals()).pipe(
              map((jkOriginals:JKOriginal[])=>loadJKOriginalSuccess({jkOriginals})),
              catchError(error => of({ type: '[jkOriginal] Load jkOriginal Failure', error })) // Handle error appropriately
            )
          })
        )
      })
}

