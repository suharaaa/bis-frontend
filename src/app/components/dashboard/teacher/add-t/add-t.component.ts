import { ActivatedRoute } from '@angular/router';
import { APIResponse } from 'src/app/models/apiresponse';
import { Teacher } from 'src/app/models/teacher';
import { TeacherService } from 'src/app/services/teacher.service';
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
  private teacherFormGroup: FormGroup;
  private id: string;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private formBuilder: FormBuilder,
    private teacherService: TeacherService,
    private snackbar: MatSnackBar,
    private route: ActivatedRoute
  ) { }
  getErrorMessage() {
    if (this.teacherFormGroup.controls.email.hasError('required')) {
      return 'You should enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  ngOnInit() {
    this.teacherFormGroup = this.formBuilder.group({
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

    this.route.queryParams.subscribe(params => {
      if (params.id) {
        this.id = params.id;
        this.teacherService.getTeacherId(this.id).subscribe(res => {
        });

      }
    });

    this.teacherService.getNextTid().subscribe((response: APIResponse) => {
      this.teacherFormGroup.get('tid').setValue(response.data);
    });
    this.matcher = new TeacherErrorStateMatcher();
  }

  public get TeacherFormGroup(): FormGroup {
      return this.teacherFormGroup;
  }

  public get TeacherErrorStateMatcher(): ErrorStateMatcher {
      return this.matcher;
  }

  public addTeacher() {

      const teacher = new Teacher(this.teacherFormGroup.getRawValue());

      this.teacherService.addTeacher(teacher).subscribe(res => {
        // console.log(res);
        this.snackbar.open('Added successfully!', '', { duration: 2000 });

        this.clear();

      }, err => {

        this.snackbar.open(err.message, '', {
          duration: 2000
        });
      });

    }

    public clear() {
      this.teacherFormGroup.reset ();
    }


}
