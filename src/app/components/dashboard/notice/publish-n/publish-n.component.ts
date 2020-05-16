import { Component, OnInit } from '@angular/core';
import { NoticeService } from 'src/app/services/notice.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';
import { DatePipe } from '@angular/common';

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
  private publishedOn: Date;

  constructor(
    private noticeService: NoticeService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.title = '';
    this.content = '';
    this.teachersOnly = false;
    this.expiresOn = new Date();
    this.noOfViewers = 0;
    this.publishedOn = new Date();

    this.route.queryParams.subscribe(params => {
      if (params.id) {
        this.noticeService.viewNoticeById(params.id).subscribe((res: { data: any }) => {
          this.id = params.id;
          this.title = res.data.title;
          this.content = res.data.content;
          this.teachersOnly = res.data.teachersOnly;
          this.expiresOn = res.data.expiresOn;
          this.publishedOn = res.data.publishedOn;
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
        expiresOn: this.expiresOn,
        publishedOn: this.publishedOn
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

  downloadPDF() {
    const doc = new jsPDF();

    let publishedDate = this.datePipe.transform(this.publishedOn,'yyyy-MM-dd');
    let pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();

    doc.setFontSize(8);
    doc.text('Bright International School, Kolonnawa', 15, 10);
    doc.text(publishedDate,15,15);
    doc.setFontSize(25);
    doc.setFontStyle('bold');
    doc.text(this.title,pageWidth/2,30, 'center');
    doc.setFontSize(15);
    doc.setFontStyle('italic');
    doc.setLineWidth(10);
    doc.text(this.content, 15, 45, {width:50});

    doc.save('notice.pdf');
  }
}
