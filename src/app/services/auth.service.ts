import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, timer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from '../models/auth';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth$ : BehaviorSubject<Auth> = new BehaviorSubject<Auth>(null);

  constructor(private http: HttpClient) {
    this.auth$.next(JSON.parse(sessionStorage.getItem('auth-user')));
   }

  login(email: string, password:string): Observable<any> {
   
    return this.http.post(environment.api_url + '/api/auth/signin', {
      username: email,
      password: password
    }, httpOptions);
  }
  
  register(username: string, password: string): Observable<any> {
      return this.http.post(environment.api_url + '/api/auth/signup', {
        username: username,
        email: username,
        password: password
      }, httpOptions);
  }

  updatePassword(){}

  

}
