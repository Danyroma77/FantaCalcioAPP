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
export class TeamsService {

  constructor(private http: HttpClient) { }

  getTeamActive(): Observable<any> {
    return this.http.get(environment.api_url + '/api/teams/teamActive', httpOptions);
  }
  getTeamNoActive(): Observable<any> {
    return this.http.get(environment.api_url + '/api/teams/teamNoActive', httpOptions);
  }

  getTeamFull(): Observable<any> {
    return this.http.get(environment.api_url + '/api/teams/teamFull', httpOptions);
  }

  setDisableTeam(idTeam: string) {
    return this.http.put(environment.api_url + '/api/teams/disableTeam/' + idTeam, httpOptions);
  }
  setAbleTeam(idTeam: string) {
    return this.http.put(environment.api_url + '/api/teams/ableTeam/' + idTeam, httpOptions);
  }
  addTeam(name: string) {
        return this.http.post(environment.api_url + '/api/teams/addnew',name, httpOptions);
  }
}
