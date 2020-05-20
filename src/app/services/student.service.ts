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

  public getNextAdmissionNumber() {
    return this.http.get(`${environment.apiHost}/students/admissionNumber`);
  }

  public enrollStudent(student: Student) {
    return this.http.post(`${environment.apiHost}/students`, student);
  }

  public viewStudents() {
    return this.http.get(`${environment.apiHost}/students`);
  }

  public viewUnenrolledStudents() {
    return this.http.get(`${environment.apiHost}/students/archived`);
  }

  public updateStudents(id: string, student) {
    return this.http.put(`${environment.apiHost}/students/${id}`, student);
  }

  public getStudentId(id: string) {
    return this.http.get(`${environment.apiHost}/students/${id}`);
  }

  public unenrollStudent(id: string){
    return this.http.put(`${environment.apiHost}/students/${id}/archived`, {});
  }

  public deleteStudent(id: string) {
    return this.http.delete(`${environment.apiHost}/students/${id}`);
  }
}
