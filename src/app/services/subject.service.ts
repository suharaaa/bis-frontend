import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class SubjectServices {

   uri = 'http://localhost:3000/subjects';

    constructor(private http: HttpClient) { }

    addSubject(Subject, TeacherName) {

        const obj = {
            Subject,
            TeacherName
        };

        console.log(obj);
        this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
    }
}
