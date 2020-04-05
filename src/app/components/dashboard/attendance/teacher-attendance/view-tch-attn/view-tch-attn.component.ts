import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { TeacherService } from 'src/app/services/teacher.service';
import { AttendanceService } from 'src/app/services/attendance.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router'

interface APIResponse {
  success : boolean,
  data : any
}

@Component({
  selector: 'app-view-tch-attn',
  templateUrl: './view-tch-attn.component.html',
  styleUrls: ['./view-tch-attn.component.css']
})

export class ViewTchAttnComponent implements OnInit {

  teacherslist: string[];
  displayedColumns = ['teacherName', 'action'];
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
    this.attendanceService.viewTchAttendance(this.attendanceRecord).subscribe((response : APIResponse) => {
      this.dataSource = response.data;
    });
  }

  

}
