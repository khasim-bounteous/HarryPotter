import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FactFiles } from "../interface/fact-file";
import { UserDetails } from "../interface/userauth";

const getFactFileState = createFeatureSelector<FactFiles>('factFiles')
const getUserDetailState = createFeatureSelector<UserDetails>('userDetails')
export const getFactFiles = createSelector(getFactFileState,(state)=>{
    return state.factfiles
})

export const getFactFileLastKey = createSelector(getFactFileState, (state) => {
    return state.lastKey;
});

export const getUserDetails = createSelector(getUserDetailState,(state)=>{
    return state
})