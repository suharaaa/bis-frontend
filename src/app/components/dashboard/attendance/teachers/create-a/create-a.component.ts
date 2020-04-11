import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatTableDataSource } from '@angular/material';
import { AttendanceService } from 'src/app/services/attendance.service';
import { APIResponse } from 'src/app/models/apiresponse';
import { StaffAttendance } from 'src/app/models/attendance.model';
import { STAFF_ATTENDANCE_STATUS } from 'src/app/models/staff-attendance-status.enum';

@Component({
  selector: 'app-create-a',
  templateUrl: './create-a.component.html',
  styleUrls: ['./create-a.component.css']
})
export class CreateAComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'name', 'actions'];
  datasource: MatTableDataSource<any>;

  public attendanceRecords:[];
  public date: Date;

  constructor(
    private attendanceService: AttendanceService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.date = new Date();
    this.loadTeachers();
  }

  private loadTeachers() {
    this.attendanceService.getAttendanceByDate(this.date).subscribe((response: APIResponse) => {
      this.attendanceRecords = response.data.filter(r => r.status === STAFF_ATTENDANCE_STATUS.ABSENT);
      this.datasource = new MatTableDataSource(this.attendanceRecords);
      this.datasource.filterPredicate = this.filterPredicate;
    });
  }

  private filterPredicate = (data, filter: string) => {
    const accumulator = (currentTerm, key) => {
      return this.nestedFilterCheck(currentTerm, data, key);
    };
    const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
    const transformedFilter = filter.trim().toLowerCase();
    return dataStr.indexOf(transformedFilter) !== -1;
  }

  private nestedFilterCheck(search, data, key) {
    if (typeof data[key] === 'object') {
      for (const k in data[key]) {
        if (data[key][k] !== null) {
          search = this.nestedFilterCheck(search, data[key], k);
        }
      }
    } else {
      search += data[key];
    }
    return search;
  }

  search(keyword) {
    this.datasource.filter = keyword.trim().toLowerCase();
  }

  public markAttendance(id: string, status: STAFF_ATTENDANCE_STATUS, r: any) {
    this.attendanceService.updateAtttendance(id, this.date, status).subscribe((response: APIResponse) => {
      if (response.success) {
        this.showSnackBar(`Attence of ${r.teacher.fname} marked successfully!`);
      } else {
        this.showSnackBar(`Could not mark ${r.teacher.fname}'s attendance.`);
      }
      this.loadTeachers();
    }, err => {
        this.showSnackBar(`Could not mark ${r.teacher.fname}'s attendance.`);
    });

  public showSnackBar(message: string): void {
    this.snackBar.open(message, null, { duration: 2000 });
  }

}
