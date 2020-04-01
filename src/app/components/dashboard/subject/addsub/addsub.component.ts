import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,} from '@angular/forms';
import { SubjectServices } from 'src/app/services/subject.service';
import { ErrorStateMatcher, MatSnackBar } from '@angular/material';
import { TaskErrorStateMatcher } from 'src/app/helpers/task-error-state-matcher';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-addsub',
  templateUrl: './addsub.component.html',
  styleUrls: ['./addsub.component.css']
})
export class AddsubComponent implements OnInit {

 angForm: FormGroup;
 constructor(private fb: FormBuilder, private ps: SubjectServices) {
    this.createForm();
   }

   createForm() {

    this.angForm = this.fb.group({
      Subject: ['', Validators.required ]
      

    });
   }
    addSubject(Subject, TeacherName) {
      this.ps.addSubject(Subject, TeacherName);
    }

  ngOnInit() {
  }
  

  
}
