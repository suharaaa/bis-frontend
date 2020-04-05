import { Router } from '@angular/router';
import { TeacherService } from './../../../../services/teacher.service';
import { Teacher } from './../../../../models/teacher';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-manage-t',
  templateUrl: './manage-t.component.html',
  styleUrls: ['./manage-t.component.css']

})


export class ManageTComponent implements OnInit {

  displayedColumns: string[] = ['id', 'fname', 'lname', 'action'];
  dataSource = new MatTableDataSource ();

  constructor(
    private teacherService: TeacherService,
    private router: Router) { }

  ngOnInit() {
    this.viewTeacher();
  }


  applyFilter(filterValue: string) {
     filterValue = filterValue.trim();
     filterValue = filterValue.toLowerCase();
     this.dataSource.filter = filterValue;
  }

  viewTeacher() {
    this.teacherService.viewTeacher().subscribe((res: any) => {
      this.dataSource = res.data;
    }, err => {
      console.log(err.message);
    });
  }

  public updateTeacher(id: string) {
    this.router.navigate(['teacher/add'], { queryParams: { id } });
  }


  delete() {}
}
