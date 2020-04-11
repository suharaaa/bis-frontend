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
      return this.http.post(`${environment.apiHost}/results`, {grade,term,subject,name,marks});
  }

  public viewResults() {
    return this.http.get(`${environment.apiHost}/results`);
  }

  public DeleteResults(id){
    return this.http.delete(`${environment.apiHost}/results/${id}`);
  }
  
  public UpdateSubject(id:String,grade,term,subject,name,marks){
    return this.http.put(`${environment.apiHost}/results/${id}`,{grade, term, subject,name, marks});
  }

  public findResultID(id){
    return this.http.get(`${environment.apiHost}/results/${id}`);
}

  }