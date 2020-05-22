import { Component, OnInit } from '@angular/core';
import { ClassServices } from 'src/app/services/classes.service';
import {  MatSnackBar } from '@angular/material';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

import * as html2pdf from 'html2pdf.js';

interface APIResponse {
  success :  boolean,
  data : any

}

@Component({
  selector: 'app-editc',
  templateUrl: './editc.component.html',
  styleUrls: ['./editc.component.css']
})
export class EditcComponent implements OnInit {

  displayedColumns: string[] = ['name', 'teacher'];
  dataSource = new MatTableDataSource();

  
  private id: String;
  private name: String;
  private classteacher: String;
  public isOnUpdate: boolean;


  constructor(
    private classServices : ClassServices,
    private snackBar : MatSnackBar,
   
    private route: ActivatedRoute,
  ) { }

  
    

    ngOnInit() {
      
    this.findClass();
  }
  findClass(){
    this.classServices.findClass().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource (res.data);
    
    }, err => {
      console.log(err.message);
    });
  }


  public downloadPDF () {

    const options ={

     name : 'Results.pdf',
     image : { type : 'jpeg'},
     html2canvas : {},
     jsPDF : {orientation:'landscape'}
    }

    const element : Element = document.getElementById('content');
    html2pdf()

       .from(element)
       .set(options)
       .save('classSummary.pdf')

     }
 
  }