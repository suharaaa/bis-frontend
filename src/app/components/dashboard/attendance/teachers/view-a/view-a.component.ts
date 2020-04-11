import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { TeacherService } from 'src/app/services/teacher.service';
import { AttendanceService } from 'src/app/services/attendance.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { STAFF_ATTENDANCE_STATUS } from 'src/app/models/staff-attendance-status.enum';

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
  displayedColumns = ['teacherId', 'teacherName', 'attendanceRecord', 'action'];
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

  updateRecord(r: any) {
    this.attendanceService.updateAtttendance(r.teacher._id, this.date, STAFF_ATTENDANCE_STATUS.PRESENT)
      .subscribe((response: APIResponse) => {
        if (response.success) {
          this.showSnackBar(`Attence of ${r.teacher.fname} updated successfully!`);
        } else {
          this.showSnackBar(`Could not mark ${r.teacher.fname}'s attendance.`);
        }
        this.viewAttendance();
    }, err => {
      this.showSnackBar(`Could not mark ${r.teacher.fname}'s attendance.`);
    });
  }

  deleteRecord(r: any) {
    this.attendanceService.deleteAttendance(r._id).subscribe((response: APIResponse) => {
      if (response.success) {
        this.showSnackBar(`Attence of ${r.teacher.fname} on ${this.attendanceService.formatDate(this.date)} deleted successfully!`);
      } else {
        this.showSnackBar(`Could not delete ${r.teacher.fname}'s attendance.`);
      }
      this.viewAttendance();
    }, err => {
      this.showSnackBar(`Could not delete ${r.teacher.fname}'s attendance.`);
    });
  }

  public showSnackBar(message: string): void {
    this.snackBar.open(message, null, { duration: 2000 });
  }

}
