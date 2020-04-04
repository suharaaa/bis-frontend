import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  public createNewUser(fullname: String,email: any,grade: number,password: any,reenter: any) {
    return this.http.post(`${environment.apiHost}/users`, {fullname,email,grade,password,reenter});
  }

  public findUsers() {
    return this.http.get(`${environment.apiHost}/users`);
  }

  public findUsersById(id: any) {
    return this.http.get(`${environment.apiHost}/users/${id}`);
  }

  public updateUsersById(id: any,fullname: String,email: any,grade: number,password: any,reenter: any) {
    return this.http.put(`${environment.apiHost}/users/${id}`, {fullname,email,grade,password});
  }

  public deleteUsersById(id: any) {
    return this.http.delete(`${environment.apiHost}/users/${id}`);
  }

}
