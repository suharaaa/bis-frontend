import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FeesService } from 'src/app/services/fees.service';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import {MatSort, MatSortable} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';

import * as html2pdf from 'html2pdf.js';


interface APIResponse {
  success : boolean,
  data : any
}



@Component({
  selector: 'app-profit',
  templateUrl: './profit.component.html',
  styleUrls: ['./profit.component.css']
})
export class ProfitComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort : MatSort;
  displayedColumns: string[] = ['grade', 'termfee', 'facilityfee', 'librarycharges', 'laboratorycharges', 'transportationfee', 'other', 'tot', 'action'];
  dataSource = new MatTableDataSource();

  private nums : Number;
  private totf : Number;
  private num1 : Number;
  private num2 : Number;
  
//new
private _id: String;
private grade : String;
private termfee :Number;
private facilityfee : Number;
private librarycharges :Number;
private laboratorycharges :Number;
private transportationfee :Number ;
private other :Number;
private tot : Number;
private fees :[];


  constructor(

    private feesService: FeesService,
    private snackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog

  ) { }

  ngOnInit() {
    this.findFees();
    this.nums = 0;
    this.num1 = 0;
    this.num2 = 0;
   // this.totf = 0;


    
   this.grade = '' ;
   this.termfee = 0;
   this.facilityfee = 0;
   this.librarycharges = 0;
   this.laboratorycharges = 0;
   this.transportationfee = 0;
   this.other = 0;
   this.tot = 0;
   this.feesService.findFees().subscribe((response : APIResponse) => {
     this.fees = response.data;
   });




  }

  applyFilterFees(keyword) {
    this.dataSource.filter = keyword.trim().toLowerCase();
  }

  findFees(){
    this.feesService.findFees().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res.data);
      this.dataSource.sort = this.sort;
    }, err => {
      console.log(err.message);
    });
  }



  public UpdateFee(id: string) {
    this.router.navigate(['dashboard/fees/addfees'], { queryParams: { id } });
    //this.feesService.updateFee(id)
  }


  DeleteFee(id: String){
    this.feesService.deleteFee(id).subscribe(response => {
      this.findFees();
      console.log(response);
      this.snackBar.open('Fee records have been successfully deleted', null, { duration : 2000});
     
    }, err => {
      this.snackBar.open('Fee could not be deleted', null, { duration : 3000});
      console.log(err.message);
    });
  }


 Multiply(){
   this.totf= Number(this.num1) * Number(this.num2);
 }



 public downloadPDFNew () {

  const options ={

   name : 'output.pdf',
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





