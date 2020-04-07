import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AttendanceService } from 'src/app/services/attendance.service';
import { TeacherService } from 'src/app/services/teacher.service';
//import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-create-a',
  templateUrl: './create-a.component.html',
  styleUrls: ['./create-a.component.css']
})
export class CreateAComponent implements OnInit {
  teacherslist: {
    _id: string;
    selected: Boolean;
  } [];
  selectedOptions: any[];
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
    //this.selectedOptions = this.teacherslist
    //.filter(item => item.selected).map(item => item._id);
  }

  private loadTeachers() {
    this.teacherService.viewTeacher().subscribe((response : {data:any}) => {
      this.teacherlist = response.data;
      this.teacherslist = this.teacherlist;
      //this.attendanceRecord = {
      //  records: [this.teacherlist.teachers.map(t =>{
      //    return {
      //      teacher: t._id,
       //     isPresent: false
      //    };
      //  })]
     // };

      //this.attendanceRecord.records = this.teacherlist.teachers.map(t =>{
       // return {
        //  teacher: t._id,
        //  isPresent: false
       // };
     // });
    });
  }


  public getSelectedTeachers(teachers) {
    this.selectedOptions = teachers.selectedOptions.selected.map(item =>item.value);
  }

  public createAttendance() {
    this.attendanceService.createAttendance(this.selectedOptions).subscribe(response => {
      console.log(response);
      this.snackBar.open('Attendance is recorded successfully', null, { duration : 2000});
    }, err => {
      this.snackBar.open('Attendance recording is failed', null, { duration : 3000});
      console.log(err.message);
    });
  }

}
