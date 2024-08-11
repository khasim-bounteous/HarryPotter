import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import { Book } from '../interface/book';
import { FactFile } from '../interface/fact-file';
import { JkOriginal } from '../interface/jk-original';
import { MagicalNews } from '../interface/magical-news';
import { Category, CategoryData } from '../interface/category';
import { ProfileContent } from '../interface/profileContent';
  
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  getUserDetails() {
    throw new Error("Method not implemented.");
  }

  constructor(private db: AngularFireDatabase) {}
  getBooks(): Observable<Book[]> {
    return this.db.list('/books').snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const key = a.payload.key;  
          const data = a.payload.val() as Book['data'];  
          return { key,data } as Book; 
        })
      )
    );
  }

  getBookById(id: string): Observable<Book> {
    return this.db.object(`/books/${id}`).snapshotChanges().pipe(
      map(action => {
        const key = action.key;
        const data = action.payload.val() as Book['data']; 
        return { key, data } as Book;
      })
    );
  }

  
  getFilms(): Observable<Book[]> {
    return this.db.list('/films').snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const key = a.payload.key;  
          const data = a.payload.val() as Book['data'];  
          return { key,data } as Book; 
        })
      )
    );
  }

  getFilm(id: string): Observable<Book> {
    return this.db.object(`/films/${id}`).snapshotChanges().pipe(
      map(action => {
        const key = action.key;
        const data = action.payload.val() as Book['data']; 
        return { key, data } as Book;
      })
    );
  }

  // getFactfiles(category: string, startAtKey: string | null = null): Observable<FactFile[]> {
  //   let queryFn;
  //   if (category === 'all') {
  //     queryFn = (ref: any) => {
  //       let query = ref.orderByKey().limitToFirst(20);
  //       if (startAtKey) {
  //         query = query.startAfter(startAtKey);
  //       }
  //       return query;
  //     };
  //   } else {
  //     queryFn = (ref: any) => {
  //       let query = ref.orderByChild('category').equalTo(category).limitToFirst(20);
  //       console.log(startAtKey)
  //       if (startAtKey) {
  //         query = query.startAfter(startAtKey);
  //       }
  //       return query;
  //     };
  //   }
  
  //   return this.db.list('/fact_files', queryFn).snapshotChanges().pipe(
  //     map(actions =>
  //       actions.map(a => {
  //         const key = a.payload.key;
  //         const data = a.payload.val() as FactFile['data'];
  //         return { key, data } as FactFile;
  //       })
  //     )
  //   );
  // }

  // getFactfiles(category: string, startAtKey: string | null = null): Observable<FactFile[]> {
  //   let queryFn;
  //   if (category === 'all') {
  //     queryFn = (ref: any) => {
  //       let query = ref.orderByKey().limitToFirst(20);
  //       if (startAtKey) {
  //         query = query.startAfter(startAtKey);
  //       }
  //       return query;
  //     };
  //     return this.db.list('/fact_files', queryFn).snapshotChanges().pipe(
  //       map(actions =>
  //         actions.map(a => {
  //           const key = a.payload.key;
  //           const data = a.payload.val() as FactFile['data'];
  //           return { key, data } as FactFile;
  //         })
  //       )
  //     );
  //   } else {
  //     queryFn = (ref: any) => {
  //       let query = ref.orderByKey().limitToFirst(20);
  //       if (startAtKey) {
  //         query = query.startAfter(startAtKey);
  //       }
  //       return query;
  //     };

  //     return this.db.list(category, queryFn).snapshotChanges().pipe(
  //       map(actions =>
  //         actions.map(a => {
  //           const key = a.payload.key;
  //           const data = a.payload.val() as FactFile['data'];
  //           return { key, data } as FactFile;
  //         })
  //       )
  //     );
  //   }
  
  // }
  getFactfiles(
    category: string,
    startAtKey: string | null = null,
    searchName: string | null = null
  ): Observable<FactFile[]> {
    let queryFn: any;

    queryFn = (ref: any) => {
      let query = ref.orderByKey().limitToFirst(20);
  
      if (searchName && searchName != '') {
        console.log("inside search if",searchName,"and");
        query = ref.orderByChild('name').startAt(searchName).endAt(searchName + "\uf8ff");
      }
      else if (startAtKey) {
        query = query.startAfter(startAtKey);
      }
   
      return query; 
    };
  
    // Query either all or a specific category
    const path = category === 'all' ? '/fact_files' : category;
  
    return this.db.list(path, queryFn).snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const key = a.payload.key;
          const data = a.payload.val() as FactFile['data'];
          return { key, data } as FactFile;
        })
      )
    );
  }
  
  
  
  getFactfile(id: string): Observable<FactFile> {
    return this.db.object(`/fact_files/${id}`).snapshotChanges().pipe(
      map(action => {
        const key = action.key;
        const data = action.payload.val() as FactFile['data'] 
        return { key, data } as FactFile;
      })
    );
  }

  getJKrowlingoriginals():Observable<JkOriginal[]> {
    console.log("")
    return this.db.list('/jkrowlingoriginal').snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const key = a.payload.key;  
          const data = a.payload.val() as JkOriginal['data']
          return { key,data } as JkOriginal; 
        })
      )
    );
  }

  
  getJKrowlingoriginal(id: string): Observable<JkOriginal> {
    return this.db.object(`/jkrowlingoriginal/${id}`).snapshotChanges().pipe(
      map(action => {
        const key = action.key;
        const data = action.payload.val() as JkOriginal['data'] 
        return { key, data } as JkOriginal;
      })
    );
  }

  getMagicalNews():Observable<MagicalNews[]> {
    return this.db.list('/magical_news').snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const key = a.payload.key;  
          const data = a.payload.val() as MagicalNews['data']
          return { key,data } as MagicalNews
        })
      )
    );
  }

  getCharacterCategories(): Observable<Category[]> {
    return this.db.list('/filters').snapshotChanges().pipe(
      map(actions => 
        actions.map(action => {
          const key = action.payload.key;
          const data = action.payload.val() as CategoryData;
          return { key, data } as Category
        })
      )
    );
  }

  getProfileContent():Observable<ProfileContent[]> {
    console.log("")
    return this.db.list('/profileContent').snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const key = a.payload.key;  
          const data = a.payload.val() as ProfileContent['data']
          return { key,data } as ProfileContent
        })
      )
    );
  }
  

  addItem(item: any) {
    this.db.list('/tem').push(item);
  }


  addData(filters: any[]): void {
    const itemsRef = this.db.list('/profileContent'); 
    filters.forEach(filter => {
      itemsRef.push(filter); 
    });
  }

}
