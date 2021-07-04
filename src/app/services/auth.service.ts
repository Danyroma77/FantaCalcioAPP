import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Credentials } from '../models/login';
import {UserSignup,Role} from '../models/login';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signIn(credentials: Credentials): Observable<boolean> {
    const success = Math.random() > 0.5;
    const response = success ? of(true) : of(true);
    return timer(2000).pipe(switchMap(() => response));
  }

  login(credentials): Observable<any> {
    return this.http.post(environment.api_url + '/api/auth/signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }
  
  register(username: string, password: string): Observable<any> {
      return this.http.post(environment.api_url + '/api/auth/signup', {
        username: username,
        email: username,
        password: password
      }, httpOptions);
  }
}
