import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { TeacherService } from 'src/app/services/teacher.service';
import { AttendanceService } from 'src/app/services/attendance.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

interface APIResponse {
  success : boolean,
  data : any
}

@Component({
  selector: 'app-view-a',
  templateUrl: './view-a.component.html',
  styleUrls: ['./view-a.component.css']
})
export class ViewAComponent implements OnInit {
  teacherslist: string[];
  displayedColumns = ['teacherName', 'attendanceRecord', 'action'];
  dataSource = new MatTableDataSource();

  public teacherlist: any
  public attendanceRecord: any;
  public count: number;
  public date: Date;

  constructor(
    private teacherService: TeacherService,
    private attendanceService: AttendanceService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.teacherlist;
    this.attendanceRecord;
    this.count = 0;
    this.date = new Date()
    this.viewAttendance()
  }

  viewAttendance() {
    this.attendanceService.viewAttendance().subscribe((response : APIResponse) => {
      this.dataSource = response.data;
    });
  }

}
