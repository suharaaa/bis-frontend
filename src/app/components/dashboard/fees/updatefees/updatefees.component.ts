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
  selector: 'app-updatefees',
  templateUrl: './updatefees.component.html',
  styleUrls: ['./updatefees.component.css']
})
export class UpdatefeesComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort : MatSort;
  displayedColumns: string[] = ['grade', 'termfee', 'facilityfee', 'librarycharges', 'laboratorycharges', 'transportationfee', 'other', 'tot', 'action'];
  dataSource = new MatTableDataSource();
  


/*
  private _id: String;
  private grade : String;
    private termfee :Number;
    private facilityfee : Number;
    private librarycharges :Number;
    private laboratorycharges :Number;
    private transportationfee :Number ;
    private other :Number;
 public currentfee = null;

*/


  constructor(

    private feesService: FeesService,
    private snackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog

  ) { }

  ngOnInit() {

    this.findFees();
    
    


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


  openDelFee(_id: string) {
    const dialogRef = this.dialog.open(FeeDialogBox);
  
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.DeleteFee(_id);
      }
    });
  }

  

}
@Component({
  selector: 'deletefee',
  templateUrl: 'deletefee.html',
})
export class FeeDialogBox {

  constructor (

  ){}

  public DeleteFee() {}

}



