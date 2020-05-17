import { Component, OnInit } from '@angular/core';
import { ResultsService } from 'src/app/services/addResults.service';
import { MatSnackBar, MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-results',
  templateUrl: './add-results.component.html',
  styleUrls: ['./add-results.component.css']
})


export class AddResultsComponent implements OnInit {
  displayedColumns: string[] = [ 'students','class','term', 'subject','marks','action'];
  dataSource : MatTableDataSource<any>;
  

  /*private id: string;
  public isOnUpdate: boolean;
    
    private grade : string;
    private name : string;
    private subject : string;
    private marks : number;*/
  
    

  constructor( 
    private resultsService: ResultsService,
    private snackBar: MatSnackBar,
    private router : Router,
    public dialog: MatDialog,
    ) {  
  }
  

  ngOnInit() {
    this.viewResults();
   
  }

   /*applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }*/

   applyFilter(keyword) {
    
    this.dataSource.filter = keyword.trim().toLowerCase();
  }

  
  
  viewResults(){
    this.resultsService.viewResults().subscribe((res: any) => {
     this.dataSource = new MatTableDataSource(res.data);
     this.dataSource.filterPredicate = this.filterPredicate;
    }, err => {
      console.log(err.message);
    });

  }

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

  
    /*this.route.queryParams.subscribe(params => {
      if (params.id) {
        this.resultsService.findResultID(params.id).subscribe((res: { data: any }) => {
          this.id = params.id;
          this.name = res.data.name;
          this.grade=res.data.grade;
          this.subject = res.data.subject;
       
          this.isOnUpdate = true;
        });
      }
    });*/
  

    
    
  DeleteResults(id: String){
    this.resultsService.DeleteResults(id).subscribe(res => {
      this.viewResults();
      this.snackBar.open('Result is successfully deleted', null, { duration : 2000});
    }, err => {
      this.snackBar.open('Result connot not be deleted', null, { duration : 3000});
      console.log(err.message);
    });
  }

 /* openDialog(_id: string) {
    const dialogRef = this.dialog.open(DialogBoxComponent2);

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.DeleteResults(_id);
      }
    });
  }*/
  

  
  
  UpdateResults(id: String){

    this.router.navigate(['homepage/results'], { queryParams: { id } });
  }
  



}
/*@Component({
  selector: 'deleteDialog',
  templateUrl: 'deleteDialog.html',
})


export class DialogBoxComponent2 {

  constructor (

  ){}

  public DeleteResults(id) {}

}*/