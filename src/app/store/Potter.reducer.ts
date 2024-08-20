import { createReducer, on } from "@ngrx/store";
import { BookState, FactFileState, FilmState, JK_OrginalState, UserState } from "./Potter.state";
import { loadBookSuccess, loadFactFiles, loadFactFilesSuccess, loadFilmSuccess, loadJKOriginalSuccess, loadUserDetailsSuccess, resetFactFiles, resetUserDetails } from "./Potter.action";

const _factFileReducer = createReducer(
    FactFileState,
    on(loadFactFiles,(state)=>{
        console.log(state.lastKey)
        return{
            ...state
        }
    }),
    on(loadFactFilesSuccess,(state,{factFiles,searchTerm})=>{
        return{
            ...state,
            factfiles: searchTerm == null || searchTerm == '' ? [...state.factfiles, ...factFiles] : [...factFiles],
            lastKey: factFiles.length > 0 ? factFiles[factFiles.length - 1].key : null,
            loading: false,
            error: null
        }
    }),
    on(resetFactFiles,(state)=>{
        return{
            ...state,
            factfiles: [],
            lastKey: null,
            loading: false,
            error: null,
        }
    })
)

const _userDetailsReducer = createReducer(
    UserState,
    on(loadUserDetailsSuccess,(state,{userDetails})=>{
        return{
            ...state,
            email: userDetails.email,
            firstName: userDetails.firstName,
            lastName: userDetails.lastName,
            uid: userDetails.uid,
            house : userDetails.house,
            wand : userDetails.wand,
            avatar : userDetails.avatar,
            dob: userDetails.dob
        }
    }),
    on(resetUserDetails,(state)=>{
        return {
            email: null,
            firstName: null,
            lastName: null,
            uid: null,
            house : null,
            wand : null,
            avatar : null,
            dob: null
        }
    })
)

const _booksReducer = createReducer(
    BookState,
    on(loadBookSuccess,(state,{books})=>{
        return{
            ...state,
            books: books,
            loading: false,
            error: null,
        }
    }),
)

const _filmsReducer = createReducer(
    FilmState,
    on(loadFilmSuccess,(state,{films})=>{
        return{
            ...state,
            films: films,
            loading: false,
            error: null,
        }
    }),
)

const _jkOriginalReducer = createReducer(
    JK_OrginalState,
    on(loadJKOriginalSuccess,(state,{jkOriginals})=>{
        return{
            ...state,
            jkOriginals: jkOriginals,
            loading: false,
            error: null,
        }
    }),
)


export function factFileReducer(state: any,action:any){
    return _factFileReducer(state,action);
}

export function userDetailsReducer(state: any,action:any){
    return _userDetailsReducer(state,action);
}

export function booksReducer(state: any,action:any){
    return _booksReducer(state,action);
}

export function filmsReducer(state: any,action:any){
    return _filmsReducer(state,action);
}

export function jkOriginalReducer(state: any,action:any){
    return _jkOriginalReducer(state,action);
}