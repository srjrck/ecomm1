// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<{token: string, status: number}> {
    // call the API to authenticate the user
    return this.http.post<{token: string, status: number}>('/api/login', {email, password}).pipe(
        map((response: {status: number, token: string}) => {
          if(response.status === 200) {
            this.loggedIn = true;
            // save the token to localstorage or cookie
          }
          return response;
        })
    );
  }


  logout(): Observable<{status: number}> {
    return this.http.post<{status: number}>('/api/logout', {}).pipe(
        map((response: {status: number}) => {
            this.loggedIn = false;
            // remove token from local storage or cookie
            return response;
        })
    );
  }






  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setLoggedIn(value: boolean): void {
    this.loggedIn = value;
  }
}
