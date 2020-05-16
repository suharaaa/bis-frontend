import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FeesService } from 'src/app/services/fees.service';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import {MatSort, MatSortable} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';


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


 


}



