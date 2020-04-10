import { Component, OnInit } from '@angular/core';
import { Validators} from '@angular/forms';
import { ResultsService } from 'src/app/services/addResults.service';
import { MatSnackBar, MatTableDataSource } from '@angular/material';

interface APIResponse {
  success : boolean,
  data : any
}

@Component({
  selector: 'app-add-results',
  templateUrl: './add-results.component.html',
  styleUrls: ['./add-results.component.css']
})


export class AddResultsComponent implements OnInit {
  displayedColumns: string[] = [  'name','grade', 'subject','marks','action'];
  dataSource = new MatTableDataSource();

    
    private grade : String;
    private name : string;
    private subject : string;
    private marks : number;
  ResultsService: any;
    

  constructor( private resultsService: ResultsService,
    private snackBar: MatSnackBar) {  
  }
  

  ngOnInit() {
    this.viewResults();
   

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewResults(){
    this.resultsService.viewResults().subscribe((res: any) => {
      this.dataSource = res.data;
    }, err => {
      console.log(err.message);
    });
  }
    
  DeleteResults(id: String){
    this.resultsService.DeleteResults(id).subscribe(response => {
      console.log(response);
      this.snackBar.open('Result is successfully deleted', null, { duration : 2000});
    }, err => {
      this.snackBar.open('Result could not be deleted', null, { duration : 3000});
      console.log(err.message);
    });
  }
  
  

  

}
