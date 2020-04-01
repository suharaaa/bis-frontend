import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http: HttpClient
  ) { }

  public enrollStudent(student: Student){
    return this.http.post(`${environment.apiHost}/student`, student);
  }

  public viewStudents(){
    return this.http.get(`${environment.apiHost}/student`);
  }


}
