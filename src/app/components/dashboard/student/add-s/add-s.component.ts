import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { ErrorStateMatcher, MatSnackBar } from '@angular/material';
import { StudentErrorStateMatcher } from 'src/app/helpers/student-error-state-matcher';
import { Student } from 'src/app/models/student';
import { APIResponse } from 'src/app/models/apiresponse';
import { ActivatedRoute } from '@angular/router';
// import { ClassServices } from 'src/app/services/classes.service';


@Component({
  selector: 'app-add-s',
  templateUrl: './add-s.component.html',
  styleUrls: ['./add-s.component.css']
})
export class AddSComponent implements OnInit {

  private matcher: StudentErrorStateMatcher;
  private studentFormGroup: FormGroup;

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private snackbar: MatSnackBar,
    // private classService: ClassServices,
    private route:ActivatedRoute
  ) { }

  getErrorMessage() {
    if (this.studentFormGroup.controls.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit() {
    this.studentFormGroup = this.formBuilder.group({
      admissionNumber: [{ value: '', disabled: true }],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      address: [''],
      gender: [''],
      dob: [''],
      nation: [''],
      religion: [''],
      mail: [''],
      class:[''],
      mname: [''],
      moccupation: [''],
      mworkp: [''],
      maddress: [''],
      mphone: [''],
      memail: [''],
      faname: [''],
      foccupation: [''],
      fworkp: [''],
      faddress: [''],
      fphone: [''],
      femail: [''],
    });
    this.studentService.getNextAdmissionNumber().subscribe((response: APIResponse) => {
      this.studentFormGroup.get('admissionNumber').setValue(response.data);
    });
    this.matcher = new StudentErrorStateMatcher();
  }

  public get StudentFormGroup(): FormGroup {
    return this.studentFormGroup;
  }

  public get StudentErrorStateMatcher(): ErrorStateMatcher {
    return this.matcher;
  }

  public enrollStudent() {
    
    const student = new Student(this.studentFormGroup.getRawValue());

    this.studentService.enrollStudent(student).subscribe(res => {
      //notify
      this.snackbar.open('Enrolled successfully!', '', { duration: 2000 });

      //clear data
      this.clear();

    }, err => {
      //error msg
      this.snackbar.open(err.message, '', {
        duration: 2000
      });
    });

  }

  public clear() {
    this.studentFormGroup.reset();
  }


}
