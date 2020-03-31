import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-addsub',
  templateUrl: './addsub.component.html',
  styleUrls: ['./addsub.component.css']
})
export class AddsubComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
   }

   createForm() {

    this.angForm = this.fb.group({
      Subject: ['', Validators.required ]
      

    });
   }

  ngOnInit() {
  }

  show()
  {
    alert("add sucessfully")
  }

}
