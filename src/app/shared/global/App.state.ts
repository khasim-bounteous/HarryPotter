import { booksReducer, factFileReducer, filmsReducer, jkOriginalReducer, userDetailsReducer } from "src/app/store/Potter.reducer";

export const AppState = {
    factFiles: factFileReducer,
    userDetails: userDetailsReducer,
    books: booksReducer,
    films: filmsReducer,
    jkOriginals: jkOriginalReducer
}