    import { createAction, props } from "@ngrx/store";
    import { FactFile} from "../interface/fact-file";
import { UserDetails } from "../interface/userauth";

    export const LOAD_FACTFILES = '[fact-file page] load fact-files'
    export const LAOD_FACTFILES_SUCCESS = '[fact-file page] load fact-files success'
    export const LOAD_USER_DETAILS = '[profile page] load profile'
    export const LOAD_USER_DETAILS_SUSCCESS = '[profile page] load profile success'


    export const loadFactFiles = createAction(LOAD_FACTFILES,props<{category: string,searchTerm:string | null}>())
    export const loadFactFilesSuccess = createAction(LAOD_FACTFILES_SUCCESS,props<{factFiles: FactFile[],searchTerm:string | null}>());
    export const resetFactFiles = createAction('[FactFiles] Reset')
    
    export const loadUserDetails = createAction(LOAD_USER_DETAILS)
    export const loadUserDetailsSuccess = createAction(LOAD_USER_DETAILS_SUSCCESS,props<{userDetails: UserDetails}>());
    export const resetUserDetails = createAction('[UserDetails] Reset')
    