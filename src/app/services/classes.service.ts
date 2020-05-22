import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Classes } from 'src/app/models/classes';



@Injectable({
    providedIn: 'root'
})

export class ClassServices {

   

    constructor(private http: HttpClient) { }

    public createNewClass(classes: Classes){
        return this.http.post(`${environment.apiHost}/classes`,classes);
    }

    public findClass() {
        return this.http.get(`${environment.apiHost}/classes`);
    }

    public findClassID(id){
        return this.http.get(`${environment.apiHost}/classes/${id}`);
    }

    public UpdateClass(id:String ,classes){
        return this.http.put(`${environment.apiHost}/classes/${id}`,classes);
    }

    public DeleteClass(id:String){
        return this.http.delete(`${environment.apiHost}/classes/${id}`);
    }

    
    

}