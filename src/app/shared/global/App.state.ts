import { factFileReducer, userDetailsReducer } from "src/app/store/Potter.reducer";

export const AppState = {
    factFiles: factFileReducer,
    userDetails: userDetailsReducer,
}