import { Component, OnInit } from '@angular/core';
import { ClassServices } from 'src/app/services/classes.service';
import {  MatSnackBar } from '@angular/material';
import { TeacherService } from 'src/app/services/teacher.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Classes } from 'src/app/models/classes';

interface APIResponse {
  success : boolean,
  data : any
} 

@Component({
  selector: 'app-addc',
  templateUrl: './addc.component.html',
  styleUrls: ['./addc.component.css']
})



export class AddcComponent implements OnInit {

  private name: String;
  private teacher: [];
  private classForm: FormGroup;


  private id: string;
  public isOnUpdate: boolean;
 
public teachers: [];

  constructor(

   private classService: ClassServices,
   private snackBar: MatSnackBar,
   public teacherService: TeacherService,
   private route: ActivatedRoute,
   private formBuilder: FormBuilder

  ) { }

  ngOnInit(){

    this.teachers =[];
    this.classForm = this.formBuilder.group({
    
      
    name : [''],
    teacher : '',
      });
    

    //view details by id (view details in update)
      this.route.queryParams.subscribe(params => {
        if (params.id) {
          this.isOnUpdate = true;
          this.id = params.id;
          this.classService.findClassID(this.id).subscribe((res: APIResponse) => {
           
            this.classForm.patchValue(res.data);
            this.classForm.controls.teacher.patchValue(res.data.teacher && res.data.teacher._id);
         
  
          })
        }else{
          this.isOnUpdate = false;
        }
      })
  
  
this.viewTeacher();

  }
  public get ClassForm(): FormGroup {
    return this.classForm;
 
  }
  
  //update class details
  public changeClass(){
    const classes = new Classes(this.classForm.getRawValue()); 
  
    this.classService.UpdateClass(this.id,classes).subscribe(response => {
    console.log(response);
   this.snackBar.open('Updated successfully', null, { duration : 2000});
    }, err => {
    this.snackBar.open('Class and Teacher Name  required', null, { duration : 3000});
      console.log(err.message);
  });
  
  }


 
//view all the teachers name from the teachers database 
public viewTeacher() {
  this.teacherService.viewTeacher().subscribe((res: { data: any }) => this.teachers = res.data);
}



//create new class
public createNewClass(){
  const classes = new Classes(this.classForm.getRawValue()); 
  this.classService.createNewClass(classes).subscribe(response => {
  console.log(response);
 this.snackBar.open('Class and Class Teacher added successfully', null, { duration : 2000});
  }, err => {
  this.snackBar.open('Class and Teacher name required', null, { duration : 3000});
    console.log(err.message);
});
  
  
}

//reset the details in form
public clear() {
  this.classForm.reset();
  

}
  }