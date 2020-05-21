import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import { Teacher } from 'src/app/models/teacher';
import { MatTableDataSource } from '@angular/material/table';
import {MatSnackBar} from '@angular/material';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-report1',
  templateUrl: './report1.component.html',
  styleUrls: ['./report1.component.css']
})
export class Report1Component implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'phone', 'mphone'];
  dataSource: MatTableDataSource<any>;

  constructor(
    private snackBar: MatSnackBar,
    private teacherService: TeacherService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.viewTeacher();
  }

  applyFilter(keyword) {
    this.dataSource.filter = keyword.trim().toLowerCase();
  }

  viewTeacher() {
    this.teacherService.viewTeacher().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res.data);

    }, err => {
      console.log(err.message);
    });
  }




  public downloadpdf() {

    const options = {
      margin: 0,
      filename: 'Contact_Details.pdf' ,
      image: {type: 'jpeg'},
      html2canvas: {},
      jsPDF: { orientation: 'landscape'}
    };


    const content: Element =  document.getElementById('content');
    html2pdf()
    .from(content)
    .set(options)
    .save();

  }
}
