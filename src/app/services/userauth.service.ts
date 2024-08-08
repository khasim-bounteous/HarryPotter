import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { SignIn, SingUp } from '../interface/userauth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  userLogin(loginDetails: SignIn): Observable<any> {
    return this.http.post<any>(`${environment.authApiEndPoint}/auth/login`, loginDetails);
  }

  userSignup(signupDetails: SingUp): Observable<any> {
    return this.http.post<any>(`${environment.authApiEndPoint}/users`, signupDetails);
  }

  userLogout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.router.navigate(['/login']);
  }

  getUserProfile(): Observable<any> {
    return this.http.get<any>('https://api.escuelajs.co/api/v1/auth/profile');
  }

  saveTokens(accessToken: string, refreshToken: string): void {
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
  }

  getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }

  getRefreshToken(): Observable<any> {
    const refreshToken = localStorage.getItem('refresh_token');
    if (!refreshToken) {
      return throwError('No refresh token available');
    }
    return this.http.post<any>(`${environment.authApiEndPoint}/auth/refresh-token`, {
      refreshToken
    });
  }

}
