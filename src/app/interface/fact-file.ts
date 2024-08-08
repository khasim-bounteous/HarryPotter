export interface SideNav{
    title: string,
    values: string[]
}

export interface FactFileData{
    name: string,
    url: string,
    urlImage: string,
    description: string,
    category: string,
    sidenav: SideNav[]
}

export interface FactFile {
    key: string,
    data: FactFileData
}

export interface FactFiles{
    factfiles: FactFile[],
    lastKey: string | null;
    loading: boolean;
    error: any;
}
