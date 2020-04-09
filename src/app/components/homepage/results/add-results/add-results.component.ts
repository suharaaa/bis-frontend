import { Component, OnInit } from '@angular/core';
import { Validators} from '@angular/forms';
import { ResultsService } from 'src/app/services/addResults.service';
import { MatSnackBar } from '@angular/material';
import { ResultsComponent } from '../results.component';

@Component({
  selector: 'app-add-results',
  templateUrl: './add-results.component.html',
  styleUrls: ['./add-results.component.css']
})


export class AddResultsComponent implements OnInit {

 


  constructor( private resultsService: ResultsService,
    private snackBar: MatSnackBar) {  
  }
  

  ngOnInit() {
    //this.name;
    


  }
  

  

}
