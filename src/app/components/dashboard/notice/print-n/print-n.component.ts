import { Component, OnInit } from '@angular/core';
import { NoticeService } from 'src/app/services/notice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';
import { DatePipe } from '@angular/common';
import * as html2pdf from 'html2pdf.js';

interface APIResponse {
  success : boolean,
  data : any
}

@Component({
  selector: 'app-print-n',
  templateUrl: './print-n.component.html',
  styleUrls: ['./print-n.component.css']
})
export class PrintNComponent implements OnInit {
  private id : string;
  private title: String;
  private content: String;
  private teachersOnly: boolean;
  private expiresOn: Date;
  private noOfViewers: number;
  private publishedOn: Date;
  public publishedDate: any;

  constructor(
    private noticeService: NoticeService,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.title = '';
    this.content = '';
    this.teachersOnly = false;
    this.expiresOn = new Date();
    this.noOfViewers = 0;
    this.publishedOn = new Date();
    this.publishedDate = new Date();

    this.route.queryParams.subscribe(params => {
      if (params.id) {
        this.noticeService.viewNoticeById(params.id).subscribe((res: { data: any }) => {
          this.id = params.id;
          this.title = res.data.title;
          this.content = res.data.content;
          this.teachersOnly = res.data.teachersOnly;
          this.expiresOn = res.data.expiresOn;
          this.publishedOn = res.data.publishedOn;
        });
      }
    });

    this.publishedDate = this.datePipe.transform(this.publishedOn,'yyyy-MM-dd');
  }

  downloadPDF() {
    
    const options = {
      filename: 'notice.pdf',
      image: { type: 'jpeg'},
      html2canvas : {},
      jsPDF : {orientation:'portrait'}
    }

    const content: Element = document.getElementById('content');

    html2pdf()
    .from(content)
    .set(options)
    .save()
    
  }
}
