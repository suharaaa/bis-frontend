import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { StudentService } from 'src/app/services/student.service';
import {MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-student-archive',
  templateUrl: './student-archive.component.html',
  styleUrls: ['./student-archive.component.css']
})
export class StudentArchiveComponent implements OnInit {

  displayedColumns = ['id', 'name','class', 'action'];
  dataSource = new MatTableDataSource();

  constructor(
    private studentService: StudentService,
    public dialog: MatDialog,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.viewUnenrolledStudents();
  }

  viewUnenrolledStudents(){
    this.studentService.viewUnenrolledStudents().subscribe((res: any) => {
      this.dataSource = res.data;
    }, err => {
      console.log(err.message);
    });
  }

  public delete(_id: string) {
    this.studentService.deleteStudent( _id ).subscribe(res => {
      this.viewUnenrolledStudents();
      //notify
      this.snackbar.open('Record deleted successfully!', '', { duration: 2000 });
    }, err => {
      //error msg
      this.snackbar.open(err.message, '', {
        duration: 2000
      });
    });
  }

  openDialog(_id: string) {
    const dialogRef = this.dialog.open(DialogBoxStudentDel);

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.delete(_id);
      }
    });
  }

}

@Component({
  selector: 'dialogBoxStudentDel',
  templateUrl: 'dialogBoxStudentDel.html',
})
export class DialogBoxStudentDel {

  constructor (

  ){}

  public delete() {}

}
