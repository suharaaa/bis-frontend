import { Component, OnInit } from '@angular/core';
import { NoticeService } from 'src/app/services/notice.service';
import { MatSnackBar } from '@angular/material';

interface APIResponse {
  success : boolean,
  data : any
}

@Component({
  selector: 'app-publish-n',
  templateUrl: './publish-n.component.html',
  styleUrls: ['./publish-n.component.css']
})
export class PublishNComponent implements OnInit {
  private title: String;
  private content: String;
  private teachersOnly: boolean;
  private expiresOn: Date;
  private noOfViewers: number;

  constructor(
    private noticeService: NoticeService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.title = '';
    this.content = '';
    this.teachersOnly = false;
    this.expiresOn = new Date();
    this.noOfViewers = 0;
  }

  createNotice() {
    this.noticeService.createNotice(this.title,this.content,this.teachersOnly,this.expiresOn,this.noOfViewers).subscribe(response => {
      console.log(response);
      this.snackBar.open('Notice is published successfully', null, { duration : 2000});
    }, err => {
      this.snackBar.open('Title & Content required', null, { duration : 3000});
      console.log(err.message);
    });
    this.clear();
  }

  clear() {
    this.title = '';
    this.content = '';
    this.teachersOnly = false;
    this.expiresOn = null;
  }
}
