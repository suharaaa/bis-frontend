import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addsub',
  templateUrl: './addsub.component.html',
  styleUrls: ['./addsub.component.css']
})
export class AddsubComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  show(){

    alert("Successfully Added!!!")
  }
}
