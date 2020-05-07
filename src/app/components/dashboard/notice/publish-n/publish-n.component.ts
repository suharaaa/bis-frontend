import { Component, OnInit } from '@angular/core';
import { NoticeService } from 'src/app/services/notice.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

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
  private id : string;
  private title: String;
  private content: String;
  private teachersOnly: boolean;
  private expiresOn: Date;
  private noOfViewers: number;
  private isOnUpdate: boolean;

  constructor(
    private noticeService: NoticeService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.title = '';
    this.content = '';
    this.teachersOnly = false;
    this.expiresOn = new Date();
    this.noOfViewers = 0;

    this.route.queryParams.subscribe(params => {
      if (params.id) {
        this.noticeService.viewNoticeById(params.id).subscribe((res: { data: any }) => {
          this.id = params.id;
          this.title = res.data.title;
          this.content = res.data.content;
          this.teachersOnly = res.data.teachersOnly;
          this.expiresOn = res.data.expiresOn;
          this.isOnUpdate = true;
        });
      }
    });
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

  updateNotice(){
    this.noticeService.updateNoticeById(
      this.id,
      {
        title:  this.title,
        content: this.content,
        teachersOnly: this.teachersOnly,
        expiresOn: this.expiresOn
      }
    ).subscribe(response => {
      console.log(response);
      this.snackBar.open('Notice is successfully updated', null, { duration : 2000});
      this.router.navigate(['dashboard/notice/view']);
    }, err => {
      this.snackBar.open('Notice could not be updated', null, { duration : 3000});
      console.log(err.message);
    });
  }
}
