import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(
    private http : HttpClient
  ) { }

  public saveStdAttendance(id, stdAttendanceRecord,count) {
    return this.http.post(`${environment.apiHost}/classes/${id}/attendance`, {stdAttendanceRecord,count});
  }


}
