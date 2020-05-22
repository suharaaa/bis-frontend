import { Component, OnInit, ViewChild } from '@angular/core';
import { SubjectServices } from 'src/app/services/subject.service';
import { ClassServices } from 'src/app/services/classes.service';
import {  MatSnackBar, MatSort } from '@angular/material';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

export interface APIResponse {
  success :  boolean,
  subjectname : any,
  class :any,
  teacher :any,

}

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjecthomeComponent implements OnInit {

  //displayedColumns: string[] = ['class', 'subjectname', 'teacher'];
  //dataSource : MatTableDataSource<any>;

  @ViewChild(MatSort, {static: true}) sort : MatSort;
  displayedColumns: string[] = [ 'class','subjectname','teacher'];
  dataSource = new MatTableDataSource();

 
  constructor(
    private subjectServices : SubjectServices,
    private snackBar : MatSnackBar,
   private router : Router,
   public dialog: MatDialog


   ) { }

  ngOnInit() {

    this.findSubjects();
  }


  //dispaly all the records in subject table
  findSubjects(){
    this.subjectServices.findSubjects().subscribe((res: any) => {
      this.dataSource =new MatTableDataSource (res.data);
      this.dataSource.filterPredicate = this.filterPredicate;
      this.dataSource.sort = this.sort;
    }, err => {
      console.log(err.message);
    });
  }



  //search by class,subject and teacher name
  private filterPredicate = (data, filter: string) => {
    const accumulator = (currentTerm, key) => {
      return this.nestedFilterCheck(currentTerm, data, key);
    };
    const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
    const transformedFilter = filter.trim().toLowerCase();
    return dataStr.indexOf(transformedFilter) !== -1;
  }

  private nestedFilterCheck(applyFilter, data, key) {
    if (typeof data[key] === 'object') {
      for (const k in data[key]) {
        if (data[key][k] !== null) {
          applyFilter = this.nestedFilterCheck(applyFilter, data[key], k);
        }
      }
    } else {
      applyFilter += data[key];
    }
    return applyFilter;
  }

  applyFilter(keyword) {
    this.dataSource.filter = keyword.trim().toLowerCase();
  }



}
