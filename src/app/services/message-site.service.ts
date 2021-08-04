import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class MessageSiteService {

  constructor(private http: HttpClient) { }

  getMessageHome(userID : string): Observable<any> {
    return this.http.get(environment.api_url + '/api/message/messageInHome/' + userID, httpOptions);
  }
}
