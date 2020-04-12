import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import { Teacher } from 'src/app/models/teacher';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-manage-t',
  templateUrl: './manage-t.component.html',
  styleUrls: ['./manage-t.component.css']

})


export class ManageTComponent implements OnInit {

  displayedColumns: string[] = ['id', 'fname', 'lname', 'action'];
  dataSource = new MatTableDataSource ();

  constructor(
    private snackBar: MatSnackBar,
    private teacherService: TeacherService,
    private router: Router) { }

  ngOnInit() {
   this.viewTeacher();
  }


  applyFilter(keyword) {
     this.dataSource.filter = keyword.trim().toLowerCase();
  }

  viewTeacher() {
    this.teacherService.viewTeacher().subscribe((res: any) => {
      this.dataSource = res.data;
    }, err => {
      console.log(err.message);
    });
  }

  public updateTeacher(id: string) {
    this.router.navigate(['dashboard/teacher/add'], { queryParams: { id } });
  }


  moveToDeleteList(id: string) {
  this.teacherService.moveTeacher(id).subscribe(res => {
    this.viewTeacher();
    this.snackBar.open('Teacher is successfully moved to the Delete List', null , { duration : 2000});
  }, err => {
    this.snackBar.open(err.message, '', {
      duration: 2000
    });
  });

}
}
