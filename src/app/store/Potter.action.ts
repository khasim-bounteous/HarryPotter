import { createAction, props } from "@ngrx/store";
import { FactFile } from "../interface/fact-file";
import { UserDetails } from "../interface/userauth";
import { Book} from "../interface/book";
import { Film } from "../interface/film";
import { JKOriginal } from "../interface/jk-original";

export const LOAD_FACTFILES = '[fact-file page] load fact-files'
export const LAOD_FACTFILES_SUCCESS = '[fact-file page] load fact-files success'
export const LOAD_USER_DETAILS = '[profile page] load profile'
export const LOAD_USER_DETAILS_SUSCCESS = '[profile page] load profile success'
export const LOAD_BOOKS = '[books-page] load books'
export const LOAD_BOOKS_SUCCESS = '[books-page] load books success'
export const LOAD_FILMS = '[films-page] load films'
export const LOAD_FILMS_SUCCESS = '[films-page] load films success'
export const LOAD_JK_ORIGINALS = '[jkOriginals-page] load jkOriginals'
export const LOAD_JK_ORIGINALS_SUCCESS = '[jkOriginals-page] load jkOriginals success'

export const loadFactFiles = createAction(LOAD_FACTFILES, props<{ category: string, searchTerm: string | null }>())
export const loadFactFilesSuccess = createAction(LAOD_FACTFILES_SUCCESS, props<{ factFiles: FactFile[], searchTerm: string | null }>());
export const resetFactFiles = createAction('[FactFiles] Reset')

export const loadUserDetails = createAction(LOAD_USER_DETAILS)
export const loadUserDetailsSuccess = createAction(LOAD_USER_DETAILS_SUSCCESS, props<{ userDetails: UserDetails }>());
export const resetUserDetails = createAction('[UserDetails] Reset')

export const loadBooks = createAction(LOAD_BOOKS)
export const loadBookSuccess = createAction(LOAD_BOOKS_SUCCESS, props<{ books: Book[] }>());

export const loadFilms = createAction(LOAD_FILMS)
export const loadFilmSuccess = createAction(LOAD_FILMS_SUCCESS, props<{ films: Film[] }>());

export const loadJKOriginals = createAction(LOAD_JK_ORIGINALS)
export const loadJKOriginalSuccess = createAction(LOAD_JK_ORIGINALS_SUCCESS,props<{jkOriginals: JKOriginal[]}>())