import { Component, OnInit } from '@angular/core';
import { NoticeService } from 'src/app/services/notice.service';
import { APIResponse } from 'src/app/models/apiresponse';

@Component({
  selector: 'app-tnoticeboard',
  templateUrl: './tnoticeboard.component.html',
  styleUrls: ['./tnoticeboard.component.css']
})
export class TnoticeboardComponent implements OnInit {

  private _id: String;
  private publishedOn: Date;
  private title: String;
  private teachersOnly: Boolean;
  private updatedOn: Date;
  private expiresOn: Date;
  private notices:[];

  constructor(
    private noticeService: NoticeService
  ) { }

  ngOnInit(): void {
    this._id = '';
    this.publishedOn = new Date();
    this.title = '';
    this.teachersOnly = false;
    this.updatedOn = new Date();
    this.expiresOn = new Date();
    this.noticeService.viewNotices().subscribe((response : APIResponse) => {
      this.notices = response.data;
    });
  }

}
