import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
    providedIn: 'root'
})

export class SubjectServices {

   

    constructor(private http: HttpClient) { }

    public createNewSubject(subjectname,classname, teachername){
        return this.http.post(`${environment.apiHost}/subjects`,{subjectname,classname,teachername});
    }

    public findSubjects() {
        return this.http.get(`${environment.apiHost}/subjects`);
    }

    public findSubjectID(id){
        return this.http.get(`${environment.apiHost}/subjects/${id}`);
    }

    public UpdateSubject(id:String,subjectname, classname,teachername){
        return this.http.put(`${environment.apiHost}/subjects/${id}`,{subjectname,classname,teachername});
    }

    public DeleteSubject(id){
        return this.http.delete(`${environment.apiHost}/subjects/${id}`);
    }

}