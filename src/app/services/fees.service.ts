import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FeesService {

  constructor(
    private http: HttpClient
  ) { }

    public createNewFee(grade, termfee, facilityfee, librarycharges, laboratorycharges, transportationfee, other){
      return this.http.post(`${environment.apiHost}/fees`, { grade, termfee, facilityfee, librarycharges, laboratorycharges,transportationfee,other });
    }

    public findFees() {
      return this.http.get(`${environment.apiHost}/fees`);
    }
  
    public findFeeID() {
      return this.http.get(`${environment.apiHost}/fees/:id`);
    }
  
    public updateFee(title, content, teachersOnly, expiresOn) {
      return this.http.put(`${environment.apiHost}/notices/:id`, {title, content, teachersOnly, expiresOn});
    }
  

//try to delete the other fees by giving like updatenoticeviewersbyid


  
    public deleteFee() {
      return this.http.delete(`${environment.apiHost}/fees/:id`);
    }





    




}