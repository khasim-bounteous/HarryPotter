import { createReducer, on } from "@ngrx/store";
import { FactFileState } from "./Potter.state";
import { loadFactFiles, loadFactFilesSuccess, resectFactFiles } from "./Potter.action";

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
    on(resectFactFiles,(state)=>{
        return{
            ...state,
            factfiles: [],
            lastKey: null,
            loading: false,
            error: null,
        }
    })
)

export function factFileReducer(state: any,action:any){
    return _factFileReducer(state,action);
}