import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AttendanceService } from 'src/app/services/attendance.service';
import { TeacherService } from 'src/app/services/teacher.service';
//import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-mark-tch-attn',
  templateUrl: './mark-tch-attn.component.html',
  styleUrls: ['./mark-tch-attn.component.css']
})

export class MarkTchAttnComponent implements OnInit {
  teacherslist: string[];
  //displayedColumns = ['teacherName', 'action'];
  //dataSource = new MatTableDataSource();

  public teacherlist: any
  public attendanceRecord: any;
  public count: number;
  public date: Date;

  constructor(
    private teacherService: TeacherService,
    private attendanceService: AttendanceService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.loadTeachers();
    this.count = 0;
    this.date = new Date()
  }

  private loadTeachers() {
    this.teacherService.viewTeacher().subscribe((response : {data:any}) => {
      this.teacherlist = response.data;
      this.teacherslist = this.teacherlist;
      this.attendanceRecord = {
        records: [this.teacherlist.teachers.map(t =>{
          return {
            teacher: t._id,
            isPresent: false
          };
        })]
      };

      this.attendanceRecord.records = this.teacherlist.teachers.map(t =>{
        return {
          teacher: t._id,
          isPresent: false
        };
      });
    });
  }

  public saveTchAttendance() {
    this.attendanceService.saveTchAttendance(this.attendanceRecord).subscribe(response => {
      console.log(response);
      this.snackBar.open('Attendance is recorded successfully', null, { duration : 2000});
    }, err => {
      this.snackBar.open('Attendance recording is failed', null, { duration : 3000});
      console.log(err.message);
    });
  }

  public getCount() {
    this.count = 0;
    this.attendanceRecord.records.forEach(r => {
      if (r.isPresent) {
        this.count++;
      }
      
    });
  }


}
