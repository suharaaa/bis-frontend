import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
    providedIn: 'root'
})

export class ClassServices {

   

    constructor(private http: HttpClient) { }

    public createNewClass(classname, classteachername){
        return this.http.post(`${environment.apiHost}/classes`,{classname, classteachername});
    }

    public findClass() {
        return this.http.get(`${environment.apiHost}/classes`);
    }

    public findClassID(id){
        return this.http.get(`${environment.apiHost}/classes/${id}`);
    }

    public UpdateClass(id,classname, classteachername){
        return this.http.put(`${environment.apiHost}/classes/${id}`,{classname, classteachername});
    }

    public DeleteClass(id){
        return this.http.delete(`${environment.apiHost}/classes/${id}`);
    }

    
    

}