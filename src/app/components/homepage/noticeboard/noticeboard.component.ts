import { Component, OnInit } from '@angular/core';
import { NoticeService } from 'src/app/services/notice.service';
import { APIResponse } from 'src/app/models/apiresponse';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-noticeboard',
  templateUrl: './noticeboard.component.html',
  styleUrls: ['./noticeboard.component.css']
})
export class NoticeboardComponent implements OnInit {

  private _id: String;
  private publishedOn: Date;
  private title: String;
  private teachersOnly: Boolean;
  private updatedOn: Date;
  private expiresOn: Date;
  private notices:[];

  constructor(
    public noticeService: NoticeService
  ) { }

  ngOnInit(): void {
    this._id = '';
    this.publishedOn = new Date();
    this.title = '';
    this.teachersOnly = false;
    this.updatedOn = new Date();
    this.expiresOn = new Date();
    this.noticeService.viewPublicNotices().subscribe((response : APIResponse) => {
      this.notices = response.data;
    });
  }
}