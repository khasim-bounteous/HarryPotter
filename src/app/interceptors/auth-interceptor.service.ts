import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import { Observable, catchError,switchMap,throwError } from 'rxjs'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router';
import { UserauthService } from '../services/userauth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

    constructor(private authService: UserauthService,
        private router: Router
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const accessToken = this.authService.getAccessToken();
        let authReq = req
        if(req.url.includes('https://api.escuelajs.co/api/v1'))
        {
            authReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${accessToken}`
                  }
            });
            
        }
        return next.handle(authReq).pipe(
            catchError((error:HttpErrorResponse)=>{
                if (error.status === 401 && req.url.includes('https://api.escuelajs.co/api/v1/auth/profile')) {
                    console.log("un authorized")
                    return this.handle401Error(authReq, next);
                } 
                else if (error.status === 401 && req.url.includes('https://api.escuelajs.co/api/v1/auth/refresh-token')) {
                    console.log("un authorized")
                    return this.handle401Error(authReq, next);
                }
                else {
                    return throwError(error);
                }
            })
        )
    }
    private handle401Error(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.authService.getRefreshToken().pipe(
            switchMap((tokens: any) => {
                this.authService.saveTokens(tokens.access_token, tokens.refresh_token);
                const clonedReq = req.clone({
                    setHeaders: {
                        Authorization: `Bearer ${tokens.access_token}`
                    }
                });
                return next.handle(clonedReq);
            }),
            catchError((err) => {
                this.authService.userLogout();
                this.router.navigate(['/login']);
                return throwError(err);
            })
        );
    }
}


