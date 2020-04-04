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

    public saveStdAttendance(classObject, attendanceRecord, count){
        return this.http.post(`${environment.apiHost}/std-attendances`, {classObject, attendanceRecord, count});
    }

    public viewStdAttendance(classObject){
        return this.http.get(`${environment.apiHost}/std-attendances/${classObject}`);
    }

    public updateStdAttendance(id,classObject, attendanceRecord){
        return this.http.put(`${environment.apiHost}/std-attendances/${id}`, {classObject, attendanceRecord});
    }

    public deleteStdAttendance(id){
        return this.http.delete(`${environment.apiHost}/std-attendances/${id}`);
    }

    public getCount(count){
        return this.http.post(`${environment.apiHost}/std-attendances`, {count});
    }

    public saveTchAttendance(attendanceRecord) {
        return this.http.post(`${environment.apiHost}/attendance/teachers/mark`, {attendanceRecord});
    }

}