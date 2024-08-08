import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FactFiles } from "../interface/fact-file";

const getFactFileState = createFeatureSelector<FactFiles>('factfiles')

export const getFactFiles = createSelector(getFactFileState,(state)=>{
    return state.factfiles
})

export const getFactFileLastKey = createSelector(getFactFileState, (state) => {
    return state.lastKey;
});