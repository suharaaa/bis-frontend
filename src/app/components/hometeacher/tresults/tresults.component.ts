import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultsService } from 'src/app/services/addResults.service';
import { ClassServices } from 'src/app/services/classes.service';
import { StudentService } from 'src/app/services/student.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Results } from 'src/app/models/results';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

interface APIResponse {
  success : boolean,
  data : any
}

@Component({
  selector: 'app-tresults',
  templateUrl: './tresults.component.html',
  styleUrls: ['./tresults.component.css']
})
export class TresultsComponent implements OnInit {

  private classes: [];
  private term : string;
  private subject: string;
  private students: [];
  private marks: Number;
 // public classes :[];
  private resultsForm: FormGroup;


  private id: string;
  public isOnUpdate: boolean;

  constructor(
    private resultsService : ResultsService,
    private snackBar: MatSnackBar,
    public studentService: StudentService,
    public classService: ClassServices,
    private route: ActivatedRoute,
    private router: Router ,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.students =[];
    this.classes= [];
    this.resultsForm = this.formBuilder.group({
    class: '',
    term : [''],
    subject:[''],
    students :'',
    marks:[''],
    
      });

     
    
    this.route.queryParams.subscribe(params => {
        if (params.id) {
          this.isOnUpdate = true;
          this.id = params.id;
          this.resultsService.findResultID(this.id).subscribe((res: APIResponse) => {
           
            this.resultsForm.patchValue(res.data);
            this.resultsForm.controls.students.patchValue(res.data.students && res.data.students._id);
            this.resultsForm.controls.class.patchValue(res.data.class && res.data.class._id);
         
  
          })
        }else{
          this.isOnUpdate = false;
        }
      })
     
      this.viewStudent();
      this.viewGrades();
   

  }

  public get ResultsForm(): FormGroup {
    return this.resultsForm;
 
  }

  public changeResult(){
    const results = new Results(this.resultsForm.getRawValue()); 
  
    this.resultsService.UpdateResults(this.id,results).subscribe(response => {
    console.log(response);
    this.clear();
   this.snackBar.open('Updated successfully', null, { duration : 2000});
    }, err => {
    this.snackBar.open('All the fields required', null, { duration : 3000});
      console.log(err.message);
  });
  
  }

  public viewStudent() {
    this.studentService.viewStudents().subscribe((res: { data: any }) => {this.students = res.data;
  });
}
public viewGrades() {
  this.classService.findClass().subscribe((res: { data: any }) => {this.classes = res.data;
});
}

  
  
 

  
  
  public createNewResult(){
    const result = new Results(this.resultsForm.getRawValue()); 
    this.resultsService.createNewResult(result).subscribe(response => {
    console.log(response);
   this.snackBar.open('Results added successfully', null, { duration : 2000});
    }, err => {
    this.snackBar.open('all the fields required', null, { duration : 3000});
      console.log(err.message);
  });
    
    
  }

 
  public clear(){
    this.resultsForm.reset();
  }

  results(){
    this.router.navigate(["hometeacher/taddresult"]);
  }

}
