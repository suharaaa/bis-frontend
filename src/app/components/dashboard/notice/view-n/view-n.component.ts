import { Component, OnInit } from '@angular/core';
import { NoticeService } from 'src/app/services/notice.service';

interface APIResponse {
  success : boolean,
  data : any
}

@Component({
  selector: 'app-view-n',
  templateUrl: './view-n.component.html',
  styleUrls: ['./view-n.component.css']
})

export class ViewNComponent implements OnInit {

  private publishedOn: Date;
  private title: String;
  private teachersOnly: Boolean;
  private noOfViewers: Number;
  private updatedOn: Date;
  private expiresOn: Date;
  private notices:[];

  constructor(
    private noticeService: NoticeService
  ) { }

  ngOnInit(): void {
    this.publishedOn = new Date();
    this.title = '';
    this.teachersOnly = false;
    this.noOfViewers = null;
    this.updatedOn = new Date();
    this.expiresOn = new Date();
    this.noticeService.viewNotices().subscribe((response : APIResponse) => {
      this.notices = response.data;
    });
  } 
}



