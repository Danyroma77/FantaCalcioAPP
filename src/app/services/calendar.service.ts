import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http: HttpClient) {
    
   }


   pushList(listElement: string) {

    return this.http.post(environment.api_url + '/api/calendar/uploadfiletxt', listElement, httpOptions);
  }
}
