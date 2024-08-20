
export interface Book {
        key: string;
        data: {
                name: string;
                url: string;
                urlImage: string;
                description: string;
                category: string
        }
}


export interface Books{
        books: Book[];
        loading: boolean;
        error: any;
}