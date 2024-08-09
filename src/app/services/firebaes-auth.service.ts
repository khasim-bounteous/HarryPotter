import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from, Observable, switchMap } from 'rxjs';
import { Database, ref, set, get } from '@angular/fire/database';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaesAuthService {

  constructor(
    private auth: Auth,
    private db: Database,
    private firestore: Firestore
  ) {}

  async addHouseToUserProfile(house: string | null): Promise<void> {
    const user = this.getUser();
    if (user) {
      const userRef = ref(this.db, `users/${user.uid}`);
      await set(userRef, { house }); 
    }
  }
  signup(signupData: { email: string, password: string, firstName: string, lastName: string }): Observable<any> {
    return from(createUserWithEmailAndPassword(this.auth, signupData.email, signupData.password)).pipe(
      switchMap(userCredential => {
        const user = userCredential.user;
        const userRef = ref(this.db, `users/${user.uid}`);
        return from(set(userRef, {
          uid: user.uid,
          email: signupData.email,
          firstName: signupData.firstName,
          lastName: signupData.lastName,
          house: '',
          wand: '',
          avatar: ''
        }));
      })
    );
  }

  login(loginData:{email: string, password: string}): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth,loginData.email, loginData.password));
  }

  logout(){
     signOut(this.auth)
  }

  getUser(): any {
    return this.auth.currentUser
  }

  async getHouse(): Promise<string | null> {
    const user = this.getUser();
    if (user) {
      const userRef = ref(this.db, `users/${user.uid}`);
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        return snapshot.val()?.house || null;
      }
    }
    return null;
  }

  async getUserDetails(): Promise<any | null> {
    const user = this.getUser();
    if (user) {
      const userRef = ref(this.db, `users/${user.uid}`);
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        return snapshot.val(); 
      }
    }
    return null;
  }
}
