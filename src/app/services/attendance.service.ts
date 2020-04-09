import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class AttendanceService{

    constructor(
        private http: HttpClient
      ) { }

    public createAttendance(attendanceRecord) {
        return this.http.post(`${environment.apiHost}/attendance`, {attendanceRecord});
    }

    public viewAttendance(){
        return this.http.get(`${environment.apiHost}/attendance`);
    }

    public viewAttendanceById(id){
        return this.http.get(`${environment.apiHost}/attendance/${id}`);
    }

    public updateAtttendance(id, attendanceRecord){
        return this.http.put(`${environment.apiHost}/attendance/${id}`, {attendanceRecord});
    }

    public deleteAttendance(id){
        return this.http.delete(`${environment.apiHost}/attendance/${id}`);
    }

    public getCount(id){
        return this.http.get(`${environment.apiHost}/attendances/${id}`);
    }

    
}