import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/services/attendance.service';
import { ClassService } from 'src/app/services/class.service';
import { MatSnackBar } from '@angular/material';

interface APIResponse {
  success : boolean,
  data : any
}

@Component({
  selector: 'app-mark-std-attn',
  templateUrl: './mark-std-attn.component.html',
  styleUrls: ['./mark-std-attn.component.css']
})
export class MarkStdAttnComponent implements OnInit {

  public classes : any;
  public selectedClass: any;
  public classObject: any;
  public attendanceRecord: any;
  public count: number;

  constructor(
    private classService: ClassService,
    private attendanceService: AttendanceService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getAllClasses();
  }

  public getAllClasses() {
   this.classService.findClass().subscribe((res: {data :any }) => this.classes = res.data);
  }

  public onSelectClass() {
    this.classService.findClassID(this.selectedClass).subscribe((res: {data :any}) => this.classObject = res.data);
  }

  public getCount() {
    this.count = 0;
    this.attendanceRecord.records.forEach(r => {
      if(r.isPresent) {
        this.count++;
      }
      return this.count;
    });
  }

  public save() {
      this.attendanceService.saveStdAttendance(this.classObject.id,this.attendanceRecord,this.count).subscribe(response => {
        console.log(response);
        this.snackBar.open('Attendance recorded successfully', null, { duration : 2000});
      }, err => {
        this.snackBar.open('Attendance recorded not successful', null, { duration : 3000});
        console.log(err.message);
      });
  }
}
