import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';
import { Observer } from 'rxjs';
import { APIResponse } from '../models/apiresponse';

@Injectable({
    providedIn: 'root'
})

export class AttendanceService{

    constructor(
        private http: HttpClient,
        private datepipe: DatePipe
      ) { }

    public formatDate = (d: Date): string => this.datepipe.transform(d, 'dd-MM-yyyy');

    public createAttendance(id: string, date: Date, status: string) {
        const formattedDate = this.formatDate(date);
        return this.http.post(`${environment.apiHost}/attendance/teachers/${id}`, { date: formattedDate, status });
    }

    public getAttendanceByDate(date: Date) {
        const formatedDate = this.formatDate(date);
        return this.http.get(`${environment.apiHost}/attendance/teachers?date=${formatedDate}`);
    }

    public updateAtttendance(id: string, date: Date, status: string) {
        const formattedDate = this.formatDate(date);
        return this.http.put(`${environment.apiHost}/attendance/teachers/${id}`, { date: formattedDate, status });
    }

    public deleteAttendance(id){
        return this.http.delete(`${environment.apiHost}/attendance/${id}`);
    }

}