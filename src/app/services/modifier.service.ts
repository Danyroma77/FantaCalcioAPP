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
export class ModifierService {

  constructor(private http: HttpClient) { }

  addNewModifier(description: string, roleplayer: string) {
      
     return this.http.post(environment.api_url + '/api/modifier/addmod', 
     {
       description: description,
       roleplayers: roleplayer
     },httpOptions);
  }
  addNewConfigModifier(gradesStart, gradesEnd, pointMy, pointOther, idMod : string){
    
    return this.http.post(environment.api_url + '/api/modifier/addConfig', {
        modifierID: idMod,
        gradesStart,
        gradesEnd,
        pointMy,
        pointOther
      }, httpOptions);

  }

  configNumber(id: string): Observable<any> {

    return this.http.get(environment.api_url + '/api/modifier/configNumber/' + id, httpOptions);

  }

  getListModifier():Observable<any> {
    return this.http.get(environment.api_url + '/api/modifier/list');
  }
  getSingleModifier(id: string):Observable<any> {
    return this.http.get(environment.api_url + '/api/modifier/getInfoSingleMod/' + id, httpOptions);
  }
  getConfigModifier(id: string): Observable<any> {
    return this.http.get(environment.api_url + '/api/modifier/modifierConfig/' + id, httpOptions);
  }

  updateModifier(description: string, roleplayer: string, modID: string) {
    return this.http.post(environment.api_url + '/api/modifier/updateMod/' + modID, 
     {
       description: description,
       roleplayers: roleplayer
     },httpOptions);
  }
  updateConfig() {}

  deleteModifier(id: string) {
       return this.http.delete(environment.api_url + '/api/modifier/deleteModifier/' + id, httpOptions);
  }

  deleteConfig(id: string) {
      return this.http.delete(environment.api_url + '/api/modifier/deleteConfig/' + id , httpOptions);
  }
}
