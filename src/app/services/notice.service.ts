import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor(
    private http: HttpClient
  ) { }

  public createNotice(title, content,teachersOnly,expiresOn,noOfViewers) {
    return this.http.post(`${environment.apiHost}/notices`, {title, content, teachersOnly,expiresOn,noOfViewers});
  }

  public viewNotices() {
    return this.http.get(`${environment.apiHost}/notices`);
  }

  public viewNoticeById(_id) {
    return this.http.get(`${environment.apiHost}/notices/${_id}`);
  }

  public updateNoticeById(_id,title, content, teachersOnly, expiresOn) {
    return this.http.put(`${environment.apiHost}/notices/${_id}`, {title, content, teachersOnly, expiresOn});
  }

  public updateNoticeViewersById(_id,noOfViewers) {
    return this.http.put(`${environment.apiHost}/notices/${_id}/noofviewers`, {noOfViewers});
  }

  public deleteNoticeById(_id) {
    return this.http.delete(`${environment.apiHost}/notices/${_id}`);
  }

}
