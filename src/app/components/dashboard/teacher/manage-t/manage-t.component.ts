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

  constructor( private teacherService: TeacherService) { }

  ngOnInit() {
    this.viewTeacher();
  }



}
