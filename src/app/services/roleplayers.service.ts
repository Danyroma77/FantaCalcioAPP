import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleplayersService {

  constructor(private http: HttpClient) { }

  getListRole(): Observable<any> {
    return this.http.get(environment.api_url+ '/api/roleplayers/fulllist');
  }
}
