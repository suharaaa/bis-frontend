import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SubjectServices } from 'src/app/services/subject.service';
import { ClassServices } from 'src/app/services/classes.service';
import {  MatSnackBar } from '@angular/material';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-editsub',
  templateUrl: './editsub.component.html',
  styleUrls: ['./editsub.component.css']
})
export class EditsubComponent implements OnInit {

  displayedColumns: string[] = ['subjectname', 'class', 'teacher'];
  dataSource : MatTableDataSource<any>;

  
  public teachername: string;
  public assignIn: string;
  public isOnUpdate: boolean;
  public id: string;

  public classes;

  constructor(
    private subjectServices : SubjectServices,
    private snackBar : MatSnackBar,
   private router : Router,
   private classServices : ClassServices,
   public dialog: MatDialog

  ) { }

  ngOnInit() {

    this.findSubjects();
   
}

findSubjects(){
  this.subjectServices.findSubjects().subscribe((res: any) => {
    this.dataSource =new MatTableDataSource (res.data);
    
  }, err => {
    console.log(err.message);
  });
}


public downloadPDF () {

  const options ={

   name : 'subjectSummary.pdf',
   image : { type : 'jpeg'},
   html2canvas : {},
   jsPDF : {orientation:'landscape'}
  }

  const element : Element = document.getElementById('content');
  html2pdf()

     .from(element)
     .set(options)
     .save()

   }


}