import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { TeacherService } from 'src/app/services/teacher.service';
import { AttendanceService } from 'src/app/services/attendance.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { STAFF_ATTENDANCE_STATUS } from 'src/app/models/staff-attendance-status.enum';

import {MatDialog} from '@angular/material/dialog';
import * as html2pdf from 'html2pdf.js';

interface APIResponse {
  success : boolean,
  data : any
}

@Component({
  selector: 'app-summary-a',
  templateUrl: './summary-a.component.html',
  styleUrls: ['./summary-a.component.css']
})
export class SummaryAComponent implements OnInit {

  teacherslist: string[];
  displayedColumns = ['teacherId', 'teacherName', 'attendanceRecord'];
  dataSource = new MatTableDataSource();

  public teacherlist: any
  public attendanceRecord: any;
  public count: number;
  public today: Date;
  public date: Date;

  constructor(
    private teacherService: TeacherService,
    private attendanceService: AttendanceService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.count = 0;
    this.today = new Date();
    this.date = new Date();
    this.viewAttendance();
  }

  viewAttendance() {
    this.dataSource.data = [];
    this.attendanceService.getAttendanceByDate(this.date).subscribe((response: APIResponse) => {
      this.dataSource = response.data;
    });
  }

  public downloadPDF () {

    const options ={
  
     name : 'AttendanceSummery.pdf',
     image : { type : 'jpeg'},
     html2canvas : {},
     jsPDF : {orientation:'portrait'}
    }
  
    const element : Element = document.getElementById('content');
    html2pdf()
  
       .from(element)
       .set(options)
       .save()
  
     }

}
