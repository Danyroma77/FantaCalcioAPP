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
export class PlayersGradesService {

  constructor(private http: HttpClient) { }

  checkGradesSeasonActive():Observable<any> {
    return this.http.get(environment.api_url + '/api/playersgrades/checkGradesSeason');
  }
}
