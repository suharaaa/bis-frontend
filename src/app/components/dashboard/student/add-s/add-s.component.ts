import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { ErrorStateMatcher, MatSnackBar } from '@angular/material';
import { TaskErrorStateMatcher } from 'src/app/helpers/task-error-state-matcher';

@Component({
  selector: 'app-add-s',
  templateUrl: './add-s.component.html',
  styleUrls: ['./add-s.component.css']
})
export class AddSComponent implements OnInit {

  private matcher: TaskErrorStateMatcher;
  
  email = new FormControl('', [Validators.required, Validators.email]);
  
  constructor(
    private studentService: StudentService,
    private snackbar: MatSnackBar
  ) { }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
  ngOnInit() {
    this.matcher = new TaskErrorStateMatcher();
  }

}
