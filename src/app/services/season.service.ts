import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Season } from '../models/season';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  constructor(private http: HttpClient) { }

  getSessionActive(): Observable<any> {
    return this.http.get(environment.api_url + '/api/season/fulllist', httpOptions);
  }

  getSeasonNoActive(): Observable<any> {
    return this.http.get(environment.api_url + '/api/season/noActive', httpOptions);
  }
  getSeasonComplete() {
    return this.http.get(environment.api_url + '/api/season/listcomplete', httpOptions);
  }

  getSessionByID(seasonID: string): Observable<any> {
    return this.http.get(environment.api_url+ '/api/season/searchbyID/' + seasonID,httpOptions);
  }
  addSeason(season: Season) {
    return this.http.post(environment.api_url + '/api/season/addnew',season, httpOptions);
  }

  ableSeasonStatus(season: Season) {
    return this.http.post(environment.api_url + '/api/sesson/able/' + season.id, httpOptions);
  }
  
  disableSeasonStatus(season: Season) {
    return this.http.post(environment.api_url + '/api/sesson/disable/' + season.id, httpOptions);
  }
}
