import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FactFiles } from "../interface/fact-file";
import { UserDetails } from "../interface/userauth";
import { Books } from "../interface/book";
import { Films } from "../interface/film";
import { JKOriginals } from "../interface/jk-original";

const getFactFileState = createFeatureSelector<FactFiles>('factFiles')
const getUserDetailState = createFeatureSelector<UserDetails>('userDetails')
const getBookState = createFeatureSelector<Books>('books')
const getFilmState = createFeatureSelector<Films>('films')
const getJkOriginalState = createFeatureSelector<JKOriginals>('jkOriginals')

export const getFactFiles = createSelector(getFactFileState,(state)=>{
    return state.factfiles
})

export const getFactFileLastKey = createSelector(getFactFileState, (state) => {
    return state.lastKey;
});

export const getUserDetails = createSelector(getUserDetailState,(state)=>{
    return state
})

export const getBooks = createSelector(getBookState,(state)=>{
    return state
})

export const getFilms = createSelector(getFilmState,(state)=>{
    return state
})

export const getJkOrignals = createSelector(getJkOriginalState,(state)=>{
    return state
})