import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { UsersService } from 'src/app/services/users.service';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-userreport',
  templateUrl: './userreport.component.html',
  styleUrls: ['./userreport.component.css']
})
export class UserreportComponent implements OnInit {

  displayedColumns: string[] = ['fullname', 'email', 'grade'];
  dataSource = new MatTableDataSource();
  curDate=new Date();

  constructor(
    private usersService: UsersService,
    private snackBar: MatSnackBar,
    private router: Router
  
  ) { }

  ngOnInit() {

    this.findUsers();
  }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  findUsers(){
    this.usersService.findUsers().subscribe((res: any) => {
      this.dataSource = res.data;
    }, err => {
      console.log(err.message);
    });
  }


  


 public downloadUserPDF () {

  const options ={

   name : 'UserProfiles.pdf',
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
