import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http: HttpClient) { }

  getListSeasonActive(): Observable<any> {
    return this.http.get(environment.api_url + '/api/players/fulllist');
  }

  pushList(listElement: string) {

    return this.http.post(environment.api_url + '/api/players/uploadMultiple', listElement, httpOptions);
  }

  addNewPlayer(orderID, name, teamID,quotas,rolePlayerID, seasonID: string) {
  
    return this.http.post(environment.api_url + '/api/players/addPlayers', {
      orderID, 
      name ,
      teamID ,
      quotas,
      isValid :1,
      rolePlayerID,
      seasonID
    }
      , httpOptions);
  }

  pushFileToStorage(file: File): Observable<any> {
    const formdata: FormData = new FormData();
    console.log("FILE in SERVICE => " + JSON.stringify(file));
    formdata.append('file', file);


    return this.http.post(environment.api_url + '/api/players/uploadplayerscsv', formdata,
    );

  }

}
