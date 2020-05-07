import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from '../models/subject';



@Injectable({
    providedIn: 'root'
})

export class SubjectServices {

   

    constructor(private http: HttpClient) { }

    public createNewSubject(subject: Subject){
        return this.http.post(`${environment.apiHost}/subjects`,subject);
    }

    public findSubjects() {
        return this.http.get(`${environment.apiHost}/subjects`);
    }

    public findSubjectID(id){
        return this.http.get(`${environment.apiHost}/subjects/${id}`);
    }

    public UpdateSubject(id:String,subject){
        return this.http.put(`${environment.apiHost}/subjects/${id}`,subject);
    }

    public DeleteSubject(id:String){
        return this.http.delete(`${environment.apiHost}/subjects/${id}`);
    }

}