import { Books } from "../interface/book";
import { FactFiles } from "../interface/fact-file";
import { Films } from "../interface/film";
import { JKOriginals } from "../interface/jk-original";
import { UserDetails } from "../interface/userauth";


export const UserState: UserDetails = {
    email: null,
    firstName: null,
    lastName: null,
    uid: null,
    house : null,
    wand : null,
    avatar : null,
    dob: null
}

export const FactFileState : FactFiles = {
    factfiles: [],
    lastKey: '',
    loading: false,
    error: null
}

export const BookState: Books = {
    books: [],
    loading: false,
    error: null
}

export const FilmState: Films = {
    films: [],
    loading: false,
    error: null
}

export const JK_OrginalState: JKOriginals = {
    jkOriginals: [],
    loading: false,
    error: null
}