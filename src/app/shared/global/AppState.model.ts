import { FactFiles } from "src/app/interface/fact-file";
import { UserDetails } from "src/app/interface/userauth";

export interface AppStateModel{
    factFiles: FactFiles,
    userDetails: UserDetails
}