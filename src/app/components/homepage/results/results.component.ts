import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators} from '@angular/forms';
import { ResultsService } from 'src/app/services/addResults.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

interface APIResponse {
  success : boolean,
  data : any
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  private id: string;
  public isOnUpdate: boolean;
  private grade :string;
  private term : string;
  private subject : string;  
  private name : string;
  private marks :Number;
  
  
  

  constructor(
    private resultsService: ResultsService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router , 
    
  )
 
  { 
  }

  ngOnInit():void {
  this.grade = '';
  this.term ='';
  this.subject ='';
  this.name ='';
  this.marks=null;

  this.route.queryParams.subscribe(params => {
    if (params.id) {
      this.isOnUpdate = true;
      this.resultsService.findResultID(params.id).subscribe((res: APIResponse) => {
        this.id = params.id;   
        this.grade = res.data.grade;
        this.term = res.data.term;
        this.subject = res.data.subject;
        this.name = res.data.name;     
        this.marks=res.data.marks;
      });
    }else{
      this.isOnUpdate = false;
    }
  });

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

  changeResult(id:String){
    this.resultsService.UpdateSubject(this.id,this.grade, this.term, this.subject, this.name,this.marks).subscribe(response => {
    console.log(response);
   this.snackBar.open('Updated successfully', null, { duration : 2000});
    }, err => {
    this.snackBar.open('mark required', null, { duration : 3000});
      console.log(err.message);
  });

  }

}
