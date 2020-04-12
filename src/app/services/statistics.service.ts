import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllStatistics() {
    return this.http.get(`${environment.apiHost}/statistics`);
  }

  public getEnrollmentsByYear() {
    return this.http.get(`${environment.apiHost}/statistics/enrollments`)
  }

}
