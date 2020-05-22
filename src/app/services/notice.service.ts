import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor(
    private http: HttpClient
  ) { }

  public createNotice(title, content,teachersOnly,expiresOn) {
    return this.http.post(`${environment.apiHost}/notices`, {title, content, teachersOnly,expiresOn});
  }

  public viewNotices() {
    return this.http.get(`${environment.apiHost}/notices`);
  }

  public viewPublicNotices() {
    return this.http.get(`${environment.apiHost}/notices/public`);
  }

  public viewNoticeById(id) {
    return this.http.get(`${environment.apiHost}/notices/${id}`);
  }

  public updateNoticeById(id: string, student) {
    return this.http.put(`${environment.apiHost}/notices/${id}`, student);
  }

  public deleteNoticeById(id) {
    return this.http.delete(`${environment.apiHost}/notices/${id}`);
  }

}
