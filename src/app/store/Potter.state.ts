import { FactFiles } from "../interface/fact-file";
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
