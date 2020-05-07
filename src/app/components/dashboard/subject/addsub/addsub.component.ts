import { Component, OnInit } from '@angular/core';
import { SubjectServices } from 'src/app/services/subject.service';
import { ClassServices } from 'src/app/services/classes.service';
import { TeacherService } from 'src/app/services/teacher.service';
import {  MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'src/app/models/subject';


interface APIResponse {
  success : boolean,
  data : any
}
@Component({
  selector: 'app-addsub',
  templateUrl: './addsub.component.html',
  styleUrls: ['./addsub.component.css']
})
export class AddsubComponent implements OnInit {

  
  private subjectname: String;
  private subjectForm: FormGroup;
  private classes:[];
  private teachers:[];
  
  
  private id: string;
  public isOnUpdate: boolean;
 

 
 constructor(
   
   private subjectService: SubjectServices,
   private classService: ClassServices,
   private teacherService: TeacherService,
   private route: ActivatedRoute,
    private formBuilder: FormBuilder,
   private snackBar: MatSnackBar
   ) {}

      

   
  ngOnInit(){
    
    this.classes = [];
    this.teachers = [];
    this.subjectForm = this.formBuilder.group({
    
    subjectname :[''],
    class : '',
    teacher : '',
    });


    
    //view details by id (view details in update)
    this.route.queryParams.subscribe(params => {
      if (params.id) {
        this.isOnUpdate = true;
        this.id = params.id;
        this.subjectService.findSubjectID(this.id).subscribe((res: APIResponse) => {
         
          this.subjectForm.patchValue(res.data);
          this.subjectForm.controls.class.patchValue(res.data.class && res.data.class._id);
          this.subjectForm.controls.teacher.patchValue(res.data.teacher && res.data.teacher._id);
       

        })
       
      }else{
        this.isOnUpdate = false;
      }
    
    })

   
    this.getAllClasses();
    this.getAllTeachers();

  }
  public get SubjectForm(): FormGroup {
    return this.subjectForm;
  }



//update subject details
public changeSubject(){
  const subject = new Subject(this.subjectForm.getRawValue()); 

  this.subjectService.UpdateSubject(this.id,subject).subscribe(response => {
  console.log(response);
 this.snackBar.open('Updated successfully', null, { duration : 2000});
  }, err => {
  this.snackBar.open('Subject and Class Name  required', null, { duration : 3000});
    console.log(err.message);
});

}


//view all the classes from the classes database(refer)
public getAllClasses() {
  this.classService.findClass().subscribe((res: { data: any }) => {
    this.classes = res.data;
  });
}


//view all the teachers names from the teachers database(refer)
public getAllTeachers() {
  this.teacherService.viewTeacher().subscribe((res: { data: any }) => {
    this.teachers = res.data;
  });
}


//create new subject
  public createNewSubject(){
    const subject = new Subject(this.subjectForm.getRawValue()); 
    this.subjectService.createNewSubject(subject).subscribe(response => {
    console.log(response);
   this.snackBar.open('Subjects and teacher added successfully', null, { duration : 2000});
    }, err => {
    this.snackBar.open('Subject name and Class required', null, { duration : 3000});
      console.log(err.message);
  });
    
    
}


//reset details in form
  public clear() {
    this.subjectForm.reset();
    

  }


  }
  

  

