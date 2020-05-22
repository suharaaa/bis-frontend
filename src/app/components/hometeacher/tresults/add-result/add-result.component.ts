import { Component, OnInit, ViewChild } from '@angular/core';
import { ResultsService } from 'src/app/services/addResults.service';
import { MatSnackBar, MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import {MatSort, MatSortable} from '@angular/material/sort';

@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.css']
})

export class AddResultComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort : MatSort;
  displayedColumns: string[] = [ 'students','class','term', 'subject','marks','action'];
  dataSource : MatTableDataSource<any>;

  constructor(
    private resultsService: ResultsService,
    private snackBar: MatSnackBar,
    private router : Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.viewResults();
   
  }

   applyFilter(keyword) {
    
    this.dataSource.filter = keyword.trim().toLowerCase();
  }

  
  //view all the added results
  viewResults(){
    this.resultsService.viewResults().subscribe((res: any) => {
     this.dataSource = new MatTableDataSource(res.data);
     this.dataSource.sort = this.sort;
    }, err => {
      console.log(err.message);
    });

  }

  //update results by id
  UpdateResults(id: String){

    this.router.navigate(['hometeacher/tresult'], { queryParams: { id } });
  }



  
  
  //open deleteDialogBox
  openDialog(_id: string) {
      const dialogRef = this.dialog.open(DialogBoxResults);
  
      dialogRef.afterClosed().subscribe(result => {
        if (result){
          this.DeleteResults(_id);
        }
      });
    }
  
  //delete added results by id
  public DeleteResults(id: String){
    this.resultsService.DeleteResults(id).subscribe(res => {
      this.viewResults();
      this.snackBar.open('Result is successfully deleted', null, { duration : 2000});
    }, err => {
      this.snackBar.open('Result connot not be deleted', null, { duration : 3000});
      console.log(err.message);
    });
  }

 

}
//dialog box

@Component({
  selector: 'dialogBox',
  templateUrl: 'deleteDialogBox.html',
})
export class DialogBoxResults {

  constructor (

  ){}

  public DeleteResults() {}

}
