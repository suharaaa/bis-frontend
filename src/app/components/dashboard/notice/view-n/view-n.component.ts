import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NoticeService } from 'src/app/services/notice.service';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

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

  displayedColumns = ['title', 'publishedOn', 'expiresOn', 'isTeachersOnly', 'action'];
  dataSource = new MatTableDataSource();

  private _id: String;
  private publishedOn: Date;
  private title: String;
  private teachersOnly: Boolean;
  private noOfViewers: Number;
  private updatedOn: Date;
  private expiresOn: Date;
  private notices:[];
  private currentDate: Date;

  constructor(
    private noticeService: NoticeService,
    private snackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._id = '';
    this.publishedOn = new Date();
    this.title = '';
    this.teachersOnly = false;
    this.noOfViewers = null;
    this.updatedOn = new Date();
    this.expiresOn = new Date();
    this.currentDate = new Date();
    this.viewAllNotices();
    
  } 

  viewAllNotices() {
    this.noticeService.viewNotices().subscribe((response : APIResponse) => {
      this.dataSource = response.data;
    });
  }

  updateNotice(id: String) {
    this.router.navigate(['dashboard/notice/publish'], {queryParams: {id} });
  }

  openDialog(_id: string) {
    const dialogRef = this.dialog.open(DeleteDialogBox);

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.deleteNotice(_id);
      }
    });
  }

  deleteNotice(id: String){
    this.noticeService.deleteNoticeById(id).subscribe(response => {
      console.log(response);
      this.snackBar.open('Notice is successfully deleted', null, { duration : 2000});
      this.viewAllNotices();
      
    }, err => {
      this.snackBar.open('Notice could not be deleted', null, { duration : 3000});
      console.log(err.message);
    });
  }
}

@Component({
  selector: 'dialogBox',
  templateUrl: 'dialogBox.html',
})
export class DeleteDialogBox {

  constructor (

  ){}

  public deleteNotice() {}

}

