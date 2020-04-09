import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
    providedIn: 'root'
})

export class ClassServices {

   

    constructor(private http: HttpClient) { }

    public createNewClass(name, classteacher){
        return this.http.post(`${environment.apiHost}/classes`,{name, classteacher});
    }

    public findClass() {
        return this.http.get(`${environment.apiHost}/classes`);
    }

    public findClassID(id){
        return this.http.get(`${environment.apiHost}/classes/${id}`);
    }

    public UpdateClass(id,name, classteacher){
        return this.http.put(`${environment.apiHost}/classes/${id}`,{name, classteacher});
    }

    public DeleteClass(id){
        return this.http.delete(`${environment.apiHost}/classes/${id}`);
    }

    
    

}