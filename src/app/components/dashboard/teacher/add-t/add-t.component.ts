import { APIResponse } from 'src/app/models/apiresponse';
import { Teacher } from './../../../../models/teacher';
import { TeacherService } from './../../../../services/teacher.service';
import { ErrorStateMatcher, MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TeacherErrorStateMatcher } from 'src/app/helpers/teacher-error-state-matcher';

@Component({
  selector: 'app-add-t',
  templateUrl: './add-t.component.html',
  styleUrls: ['./add-t.component.css']
})
export class AddTComponent implements OnInit {

  private matcher: TeacherErrorStateMatcher;
  private teacherForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private formBuilder: FormBuilder,
    private teacherService: TeacherService,
    private snackbar: MatSnackBar
  ) { }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You should enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  ngOnInit() {
    this.teacherForm = this.formBuilder.group({
      tid: [{ value: '', disabled: true}],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      address: [''],
      gender: [''],
      nic: [''],
      dob: [''],
      phone: [''],
      mstatus: [''],
      mphone: [''],
      nationality: [''],
      religion: [''],
      mail: [''],
      qul: [''],
    });
    this.teacherService.getNextTid().subscribe((response: APIResponse) => {
      this.teacherForm.get('tid').setValue(response.data);
    });
    this.matcher = new TeacherErrorStateMatcher();
  }

  public get TeacherForm(): FormGroup {
      return this.teacherForm;
  }

  public get TeacherErrorStateMatcher(): ErrorStateMatcher {
      return this.matcher;
  }

  public addTeacher() {

      const teacher = new Teacher(this.teacherForm.getRawValue());

      this.teacherService.addTeacher(teacher).subscribe(res => {

        this.snackbar.open('Added successfully!', '', { duration: 2000 });

      }, err => {

        this.snackbar.open(err.message, '', {
          duration: 2000
        });
      });

    }

    public clear() {
      
      this.teacherForm.setValue [''];
    }


}
