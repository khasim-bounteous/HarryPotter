
export interface Film {
    key: string;
    data: {
            name: string;
            url: string;
            urlImage: string;
            description: string;
            category: string
    }
}


export interface Films{
    films: Film[];
    loading: boolean;
    error: any;
}