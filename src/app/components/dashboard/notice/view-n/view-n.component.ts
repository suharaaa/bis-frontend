import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
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

  private _id: String;
  private publishedOn: Date;
  private title: String;
  private teachersOnly: Boolean;
  private noOfViewers: Number;
  private updatedOn: Date;
  private expiresOn: Date;
  private notices:[];

  constructor(
    private noticeService: NoticeService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this._id = '';
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

  deleteNotice(id: String){
    this.noticeService.deleteNoticeById(id).subscribe(response => {
      console.log(response);
      this.snackBar.open('Notice is successfully deleted', null, { duration : 2000});
    }, err => {
      this.snackBar.open('Notice could not be deleted', null, { duration : 3000});
      console.log(err.message);
    });
  }
}



