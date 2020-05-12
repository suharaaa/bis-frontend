import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { ClassServices } from 'src/app/services/classes.service';
import {  MatSnackBar } from '@angular/material';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import * as jsPDF from 'jspdf';
import * as html2pdf from 'html2pdf.js';

/*interface APIResponse {
  success :  boolean,
  data : any

}*/

@Component({
  selector: 'app-viewc',
  templateUrl: './viewc.component.html',
  styleUrls: ['./viewc.component.css']
})
export class ViewcComponent implements OnInit {

  

  displayedColumns: string[] = ['name', 'teacher','action'];
  dataSource : MatTableDataSource<any>;
 

 

  constructor(
    private classServices : ClassServices,
    private snackBar : MatSnackBar,
    private router : Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {

    this.findClass();
  }

 //view all the classes in the database
  findClass(){
    this.classServices.findClass().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource (res.data);
      this.dataSource.filterPredicate = this.filterPredicate;
    }, err => {
      console.log(err.message);
    });
  }



//search by class and teacher name
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



//update class details
UpdateClass(id: string) {
    this.router.navigate(['dashboard/classes/addc'], { queryParams: { id } });
  }



   //popup message for delete action
   openDialog(_id: string) {
    const dialogRef = this.dialog.open(DialogBoxComponent2);

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.DeleteClass(_id);
      }
    });
  }


  //delete class from the database
  DeleteClass(id: String){
    this.classServices.DeleteClass(id).subscribe(response => {
      this.findClass();
      console.log(response);
      this.snackBar.open('class is successfully deleted', null, { duration : 2000});
    }, err => {
      this.snackBar.open('class could not be deleted', null, { duration : 3000});
      console.log(err.message);
    });
  }
  //@ViewChild('content') content : ElementRef;
  


  }




//dialog box ts
@Component({
  selector: 'dialogBox',
  templateUrl: 'dialogBox.html',
})
export class DialogBoxComponent2 {

  constructor (

  ){}

  public DeleteClass() {}

}