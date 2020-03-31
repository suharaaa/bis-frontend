import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { ErrorStateMatcher, MatSnackBar } from '@angular/material';
import { TaskErrorStateMatcher } from 'src/app/helpers/task-error-state-matcher';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-add-s',
  templateUrl: './add-s.component.html',
  styleUrls: ['./add-s.component.css']
})
export class AddSComponent implements OnInit {

  private fnFormControl : FormControl;
  private lnFormControl : FormControl;
  private addressFormControl : FormControl;
  private genderFormControl : FormControl;
  private dobFormControl : FormControl;
  private nationalFormControl : FormControl;
  private religionFormControl : FormControl;
  private mailFormControl : FormControl;
  private mnameFormControl : FormControl;
  private mworkFormControl : FormControl;
  private maddFormControl : FormControl;
  private mwtpFormControl : FormControl;
  private mtpFormControl : FormControl;
  private mmailFormControl : FormControl;
  private fnameFormControl : FormControl;
  private fworkFormControl : FormControl;
  private faddFormControl : FormControl;
  private fwtpFormControl : FormControl;
  private ftpFormControl : FormControl;
  private fmailFormControl : FormControl;
  private matcher : TaskErrorStateMatcher;
  
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
    this.fnFormControl = new FormControl('',[
      Validators.required
    ]);
    this.lnFormControl = new FormControl('',[
      Validators.required
    ]);
    this.addressFormControl = new FormControl('',[]);
  }

  public get TaskErrorStateMatcher(): ErrorStateMatcher {
    return this.matcher;
  }

  public get FnFormControl(): FormControl {
    return this.fnFormControl;
  }

  public get LnFormControl(): FormControl {
    return this.lnFormControl;
  }

  public get GenderFormControl(): FormControl {
    return this.genderFormControl;
  }

  public get DobFormControl(): FormControl {
    return this.dobFormControl;
  }

  public get NationalFormControl(): FormControl {
    return this.nationalFormControl;
  }

  public get ReligionFormControl(): FormControl {
    return this.religionFormControl;
  }

  public get MailFormControl(): FormControl {
    return this.mailFormControl;
  }

  public get MnameFormControl(): FormControl {
    return this.mnameFormControl;
  }

  public get MworkFormControl(): FormControl {
    return this.mworkFormControl;
  }

  public get MwtpFormControl(): FormControl {
    return this.mwtpFormControl;
  }

  public get MaddFormControl(): FormControl {
    return this.maddFormControl;
  }

  public get MtpFormControl(): FormControl {
    return this.mtpFormControl;
  }

  public get MmailFormControl(): FormControl {
    return this.mmailFormControl;
  }

  public get FnameFormControl(): FormControl {
    return this.fnameFormControl;
  }

  public get FworkFormControl(): FormControl {
    return this.fworkFormControl;
  }

  public get FwtpFormControl(): FormControl {
    return this.mwtpFormControl;
  }

  public get FaddFormControl(): FormControl {
    return this.faddFormControl;
  }

  public get FtpFormControl(): FormControl {
    return this.ftpFormControl;
  }

  public get FmailFormControl(): FormControl {
    return this.fmailFormControl;
  }

  public enrollStudent(){
    const student = new Student(this.fnFormControl.value, this.lnFormControl.value, this.addressFormControl.value, this.genderFormControl.value, this.dobFormControl.value, this.nationalFormControl.value, this.religionFormControl.value, this.mailFormControl.value, this.mnameFormControl.value, this.mworkFormControl.value, this.mwtpFormControl.value, this.maddFormControl.value, this.mtpFormControl.value, this.mmailFormControl.value, this.fnameFormControl.value, this.fworkFormControl.value, this.fwtpFormControl.value, this.faddFormControl.value, this.ftpFormControl.value, this.fmailFormControl.value);

    this.studentService.enrollStudent(student).subscribe(res => {
      //notify
      this.snackbar.open('Enrolled successfully!', '', {duration: 2000});

      //clear data

    }, err => {
      //error msg
      this.snackbar.open(err.message, '', {
        duration: 2000
      });
    });
    
  }


}
