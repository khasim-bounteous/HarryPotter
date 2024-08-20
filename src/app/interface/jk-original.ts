export interface JKOriginalData{
    author: string;
    description: string;
    name: string;
    published_on: string;
    title: string;
    url: string;
    urlImage:string
}
export interface JKOriginal {
    key: string;
    data: JKOriginalData
}

export interface JKOriginals{
    jkOriginals: JKOriginal[],
    loading: boolean,
    error: any
}