import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })
  export class ResultsService {
  
    constructor(
      private http: HttpClient
    ) { }
  
    public createNewResult(grade, term, subject, name, marks) {
      return this.http.post(`${environment.apiHost}/attendance`, {grade,term,subject,name,marks});
  }

   

}