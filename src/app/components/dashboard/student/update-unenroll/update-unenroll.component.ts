import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-update-unenroll',
  templateUrl: './update-unenroll.component.html',
  styleUrls: ['./update-unenroll.component.css']
})
export class UpdateUnenrollComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name','class', 'mail', 'action'];
  dataSource : MatTableDataSource<any>;

  constructor(
    private studentService: StudentService,
    private snackbar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog
  ) { }
  
  ngOnInit() {
    this.viewStudents();
  }

  applyFilter(keyword) {
    this.dataSource.filter = keyword.trim().toLowerCase();
  }

  viewStudents(){
    this.studentService.viewStudents().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res.data);
    }, err => {
      console.log(err.message);
    });
  }

  public updateStudent(id: string) {
    this.router.navigate(['dashboard/student/add'], { queryParams: { id } });
  }

  openDialog(_id: string) {
    const dialogRef = this.dialog.open(DialogBox);

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.unenroll(_id);
      }
    });
  }

  
  public unenroll(_id: string) {
    this.studentService.unenrollStudent( _id ).subscribe(res => {
      this.viewStudents();
      //notify
      this.snackbar.open('Unenrolled successfully!', '', { duration: 2000 });
    }, err => {
      //error msg
      this.snackbar.open(err.message, '', {
        duration: 2000
      });
    });
  }

}

@Component({
  selector: 'dialogBox',
  templateUrl: 'dialogBox.html',
})
export class DialogBox {

  constructor (

  ){}

  public unenroll() {}

}