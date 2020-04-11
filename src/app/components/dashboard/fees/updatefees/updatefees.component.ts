import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FeesService } from 'src/app/services/fees.service';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

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

  displayedColumns: string[] = ['grade', 'termfee', 'facilityfee', 'librarycharges', 'laboratorycharges', 'transportationfee', 'other', 'action'];
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
    
    //private feesService: FeesService,
    private snackBar: MatSnackBar,
    private router: Router

  ) { }

  ngOnInit() {

    this.findFees();
    


  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  findFees(){
    this.feesService.findFees().subscribe((res: any) => {
      this.dataSource = res.data;
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
      console.log(response);
      this.snackBar.open('Fee is successfully deleted', null, { duration : 2000});
    }, err => {
      this.snackBar.open('Fee could not be deleted', null, { duration : 3000});
      console.log(err.message);
    });
  }
}
