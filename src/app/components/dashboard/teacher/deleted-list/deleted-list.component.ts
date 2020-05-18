import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatSnackBar } from '@angular/material';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-deleted-list',
  templateUrl: './deleted-list.component.html',
  styleUrls: ['./deleted-list.component.css']
})
export class DeletedListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'fname', 'lname', 'phone', 'action'];
  dataSource: MatTableDataSource<any>;

  constructor(
    private teacherService: TeacherService,
    private snackbar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.showHistory();
  }

  applyFilter(keyword) {
    this.dataSource.filter = keyword.trim().toLowerCase();
  }

  showHistory() {
    this.teacherService.showHistory().subscribe((res: any) => {
      this.dataSource =  new MatTableDataSource(res.data);
    }, err => {
      console.log(err.message);
    });
  }

  public deleteTeacher(id: string) {
    this.teacherService.deleteTeacher( id ).subscribe(res => {
      this.showHistory();
      this.snackbar.open('Deleted successfully!', '', { duration: 2000 });
    }, err => {
      this.snackbar.open(err.message, '', {
        duration: 2000
      });
    });
  }

  openDialog(id: string) {
    const dialogRef = this.dialog.open(TDialogBox2);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteTeacher(id);
      }
    });
  }

}

@Component({
  selector: 'deleteconfirm2',
  templateUrl: 'deleteconfirm2.html',
})
export class TDialogBox2 {

  constructor(

  ) {}

  public deleteTeacher() {}

}
