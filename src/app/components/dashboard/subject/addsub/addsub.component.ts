import { Component, OnInit } from '@angular/core';
import { SubjectServices } from 'src/app/services/subject.service';
import { ClassServices } from 'src/app/services/classes.service';
import {  MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';


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
  private classname: any;
  private teachername: any;
  private id: string;
  public isOnUpdate: boolean;
 

 
 constructor(
   
   private subjectService: SubjectServices,
   private classService: ClassServices,
   private route: ActivatedRoute,
   private snackBar: MatSnackBar
   ) {}

      

   
  ngOnInit(): void {
    this.subjectname = '';
    this.classname = '';
    this.teachername = '';

    this.route.queryParams.subscribe(params => {
      if (params.id) {
        this.isOnUpdate = true;
        this.subjectService.findSubjectID(params.id).subscribe((res: APIResponse) => {
          this.id = params.id;
          this.subjectname = res.data.subjectname;
          this.classname = res.data.classname;
          this.teachername=res.data.teachername;
       

        });
      }else{
        this.isOnUpdate = false;
      }
    });

   


  }

  changeSubject(id:String){
    this.subjectService.UpdateSubject(this.id,this.subjectname,this.classname,this.teachername).subscribe(response => {
    console.log(response);
   this.snackBar.open('Updated successfully', null, { duration : 2000});
    }, err => {
    this.snackBar.open('Subject and Class Name  required', null, { duration : 3000});
      console.log(err.message);
  });

}
  createNewSubject(){
    this.subjectService.createNewSubject(this.subjectname,this.classname,this.teachername).subscribe(response => {
    console.log(response);
   this.snackBar.open('Subjects and teacher added successfully', null, { duration : 2000});
    }, err => {
    this.snackBar.open('Subject name and Class required', null, { duration : 3000});
      console.log(err.message);
  });
    this.clear();
    
  }

  clear() {
    this.subjectname = '';
    this.classname = '';
    this.teachername = '';
    

  }
  

  
}
