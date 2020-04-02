import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {  }
@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(
    private http: HttpClient
  ) { }
}

public addStdAttendance(data){
  return this.http.post(`${environment.apiHost}/attendance/students/mark`, {date,classId,records[]});
}

