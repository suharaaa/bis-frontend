import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators} from '@angular/forms';
import { ResultsService } from 'src/app/services/addResults.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  private grade :string;
 private term : string;
 private subject : string;  
  private name : string;
  private marks :Number;
  
  
  

  constructor(private resultsService: ResultsService,
    private snackBar: MatSnackBar,
    private router: Router , 
    
  )
 
  { 
  }



  ngOnInit() {
    this.marks = null, Validators.required
  }
  
  createNewResult() {
   
    this.resultsService.createNewResult(this.grade,this.term, this.subject,this.name, this.marks).subscribe(response => {
      console.log(response);
      this.snackBar.open('Added results to database', null, { duration : 2000});
    }, err => {
      this.snackBar.open('Please fill required fields', null, { duration : 3000});
      console.log(err.message);
    });

  }

  results(){
    this.router.navigate(["homepage/addResults"]);
  }

  clear(){
    this.marks = 0;
  }

}
