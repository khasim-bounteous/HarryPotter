import { Books } from "src/app/interface/book";
import { FactFiles } from "src/app/interface/fact-file";
import { Films } from "src/app/interface/film";
import { JKOriginals } from "src/app/interface/jk-original";
import { UserDetails } from "src/app/interface/userauth";

export interface AppStateModel{
    factFiles: FactFiles,
    userDetails: UserDetails,
    books: Books,
    films: Films,
    jkOriginals: JKOriginals
}