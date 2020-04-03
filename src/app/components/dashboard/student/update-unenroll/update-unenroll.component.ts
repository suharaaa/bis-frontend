import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';



@Component({
  selector: 'app-update-unenroll',
  templateUrl: './update-unenroll.component.html',
  styleUrls: ['./update-unenroll.component.css']
})
export class UpdateUnenrollComponent implements OnInit {
  displayedColumns = ['id', 'name', 'mail', 'action'];
  dataSource = new MatTableDataSource();

  constructor(
    private studentService: StudentService
  ) { }
  
  ngOnInit() {
    this.viewStudents();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;  
  }

  viewStudents(){
    this.studentService.viewStudents().subscribe((res: any) => {
      this.dataSource = res.data;
    }, err => {
      console.log(err.message);
    });
  }

  

  delete() {}

}
