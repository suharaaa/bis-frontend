import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { ErrorStateMatcher, MatSnackBar, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { StudentErrorStateMatcher } from 'src/app/helpers/student-error-state-matcher';
import { Student } from 'src/app/models/student';
import { APIResponse } from 'src/app/models/apiresponse';
import { ActivatedRoute } from '@angular/router';
import { ClassServices } from 'src/app/services/classes.service';
import { Router } from '@angular/router';
import * as Icons from '@fortawesome/free-solid-svg-icons';
//for demo purposes
import * as faker from 'faker';
import { Observable, Subject } from 'rxjs';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-add-s',
  templateUrl: './add-s.component.html',
  styleUrls: ['./add-s.component.css']
})
export class AddSComponent implements OnInit {

  @ViewChild('file', { static: true }) fileSelector: ElementRef;

  private matcher: StudentErrorStateMatcher;
  private studentFormGroup: FormGroup;
  private classes:[];
  private id: string;
  public isOnUpdate: boolean;

  public faFile = Icons.faFileImage;
  public faWebCam = Icons.faCamera;
  public studentImageUrl: string;
  public studentImage: any;

  task;
  uploadProgress = 0;
  downloadURL;

  mail = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private snackbar: MatSnackBar,
    private classService: ClassServices,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private fileUploadService: FileUploadService
  ) { }

  
  getErrorMessage() {
    if (this.studentFormGroup.controls.mail.hasError('required')) {
      return 'You must enter a value';
    }

    return this.mail.hasError('mail') ? 'Not a valid email' : '';
  }

  ngOnInit() {
    this.classes = [];
    // this.studentFormGroup = new FormGroup[];
    this.studentFormGroup = this.formBuilder.group({
      admissionNumber: [{ value: '', disabled: true }],
      admissionDate: [new Date()],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      nation: ['', Validators.required],
      religion: ['', Validators.required],
      mail: ['', Validators.email],
      class: ['', Validators.required],
      mname: ['', Validators.required],
      moccupation: [''],
      mworkp: [''],
      maddress: [''],
      mphone: ['', Validators.required],
      memail: ['', [Validators.required, Validators.email]],
      faname: ['', Validators.required],
      foccupation: [''],
      fworkp: [''],
      faddress: [''],
      fphone: ['', Validators.required],
      femail: ['', [Validators.required, Validators.email]],
    });

    this.route.queryParams.subscribe(params => {
      if (params.id) {
        this.isOnUpdate = true;
        this.id = params.id;
        this.studentService.getStudentId(this.id).subscribe((res: APIResponse) => {
          this.studentFormGroup.patchValue(res.data);
          this.studentFormGroup.controls.class.patchValue(res.data.class && res.data.class._id);
          this.studentImageUrl = res.data.img;
        });

      }
      else {
        this.isOnUpdate = false;
        this.getNextAdmissionNumber();
      }
    })

    this.matcher = new StudentErrorStateMatcher();

    this.getAllClasses();
  }

  private getNextAdmissionNumber(): void {
    this.studentService.getNextAdmissionNumber().subscribe((response: APIResponse) => {
      this.studentFormGroup.get('admissionNumber').setValue(response.data);
    });
  }


  public get StudentFormGroup(): FormGroup {
    return this.studentFormGroup;
  }

  public get StudentErrorStateMatcher(): ErrorStateMatcher {
    return this.matcher;
  }

  public getAllClasses() {
    this.classService.findClass().subscribe((res: { data: any }) => {
      this.classes = res.data;
    });
  }

  public enrollStudent() {

    const student = new Student(this.studentFormGroup.getRawValue()); //getRawValue-cus enrollment num is disabled
    this.fileUploadService.getDownloadUrl(this.studentFormGroup.get('admissionNumber').value).subscribe(result => {
      this.downloadURL = result;
      student.ImageUrl = result;
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
    });
  }

  public changeStudent() {
    const student = new Student(this.studentFormGroup.getRawValue());

    this.fileUploadService.getDownloadUrl(this.studentFormGroup.get('admissionNumber').value).subscribe(result => {
      this.downloadURL = result;
      student.ImageUrl = result;
      this.studentService.updateStudents(this.id, student).subscribe(res => {
        //notify
        this.snackbar.open('Updated successfully!', '', { duration: 2000 });
        //go back
        this.router.navigate(['dashboard/student/update']);
      }, err => {
        //error msg
        this.snackbar.open(err.message, '', {
          duration: 2000
        });
      });
    });
  }

  public clear() {
    this.studentFormGroup.reset();
    this.getNextAdmissionNumber();
    this.studentFormGroup.controls.admissionDate.patchValue(new Date());
  }


  /**
   * For Demo Perposes ONLY
   */
  public populateForm() {
    this.studentFormGroup.patchValue({
      fname: faker.name.firstName(),
      lname: faker.name.lastName(),
      address: `${faker.address.streetAddress()}, ${faker.address.county()}, ${faker.address.zipCode()}`,
      gender: faker.random.arrayElement(['male', 'female']),
      dob: faker.date.past(10, '2001-04-11'),
      nation: faker.random.arrayElement(['Sinhaleese']),
      religion: faker.random.arrayElement(['Buddhist', 'Christianity']),
      mail: faker.internet.email(),
      class: '',
      mname: `${faker.name.firstName()} ${faker.name.lastName()}`,
      moccupation: faker.name.jobTitle(),
      mworkp: faker.phone.phoneNumberFormat(0).split('-').join(''),
      maddress: `${faker.address.streetAddress()}, ${faker.address.county()}, ${faker.address.zipCode()}`,
      mphone: faker.phone.phoneNumberFormat(0).split('-').join(''),
      memail: faker.internet.email(),
      faname: `${faker.name.firstName()} ${faker.name.lastName()}`,
      foccupation: faker.name.jobTitle(),
      fworkp: faker.phone.phoneNumberFormat(0).split('-').join(''),
      faddress: `${faker.address.streetAddress()}, ${faker.address.county()}, ${faker.address.zipCode()}`,
      fphone: faker.phone.phoneNumberFormat(0).split('-').join(''),
      femail: faker.internet.email(),
    });
  }

  openWebCamModal() {
    const dialogRef = this.dialog.open(WebCamComponent, {
      width: 'auto',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      const admissionNumber = this.studentFormGroup.get('admissionNumber').value;
      // this.studentImage = result;
      // this.task = this.fileUploadService.upload(admissionNumber,
      //   this.dataURItoBlob(this.studentImage.imageAsDataUrl));
      this.uploadProgress = this.task.percentageChanges();
      console.log(this.downloadURL);
    });
  }

  private dataURItoBlob(dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    const byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

    // write the bytes of the string to an ArrayBuffer
    const ab = new ArrayBuffer(byteString.length);

    // create a view into the buffer
    const ia = new Uint8Array(ab);

    // set the bytes of the buffer to the correct values
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    // write the ArrayBuffer to a blob, and you're done
    const blob = new Blob([ab], { type: mimeString });
    return blob;
  }

  public selectFile() {
    this.fileSelector.nativeElement.click();
  }

  public triggerUpload($event) {
    console.log($event.target.files);
    this.uploadStudentImage($event.target.files[0]);
  }

  private uploadStudentImage(file) {
    const admissionNumber = this.studentFormGroup.get('admissionNumber').value;
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.studentImage = reader.result;
      this.task = this.fileUploadService.upload(admissionNumber,
        this.dataURItoBlob(reader.result));
      this.uploadProgress = this.task.percentageChanges();
    });
    if(file) {
      reader.readAsDataURL(file);
    }
  }


}

@Component({
  selector: 'app-web-cam',
  templateUrl: 'webcam.html',
})
export class WebCamComponent {

  private trigger: Subject<void> = new Subject<void>();

  constructor(
    public dialogRef: MatDialogRef<WebCamComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public closeDialog() {
    this.dialogRef.close();
  }


}