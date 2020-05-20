import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Results } from '../models/results';


@Injectable({
    providedIn: 'root'
  })
  export class ResultsService {
  
    constructor(
      private http: HttpClient
    ) { }
  
    public createNewResult(results : Results) {
      return this.http.post(`${environment.apiHost}/results`,results);
  }

  public viewResults() {
    return this.http.get(`${environment.apiHost}/results`);
  }

  public DeleteResults(id){
    return this.http.delete(`${environment.apiHost}/results/${id}`);
  }
  
  /*public UpdateResults(id:String,grade,term,subject,name,marks){
    return this.http.put(`${environment.apiHost}/results/${id}`,{grade, term, subject,name, marks});
  }*/

  public UpdateResults(id:String ,results){
    return this.http.put(`${environment.apiHost}/results/${id}`,results);
}

  public findResultID(id){
    return this.http.get(`${environment.apiHost}/results/${id}`);
}

  }