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
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource = new MatTableDataSource();

  constructor(
    private studentService: StudentService
  ) { }
  
  ngOnInit() {
    this.viewStudents();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewStudents(){
    this.studentService.viewStudents().subscribe((res: any) => {
      this.dataSource.data = res.data;
    }, err => {
      console.log(err.message);
    });
  }

  delete() {}

}
