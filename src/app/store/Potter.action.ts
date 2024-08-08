    import { createAction, props } from "@ngrx/store";
    import { FactFile} from "../interface/fact-file";

    export const LOAD_FACTFILES = '[fact-file page] load fact-files'
    export const LAOD_FACTFILES_SUCCESS = '[fact-file page] load fact-files success'

    export const loadFactFiles = createAction(LOAD_FACTFILES,props<{category: string,searchTerm:string | null}>())
    export const loadFactFilesSuccess = createAction(LAOD_FACTFILES_SUCCESS,props<{factFiles: FactFile[],searchTerm:string | null}>());

    export const resectFactFiles = createAction('[FactFiles] Reset')