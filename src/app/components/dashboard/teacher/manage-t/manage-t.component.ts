import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-manage-t',
  templateUrl: './manage-t.component.html',
  styleUrls: ['./manage-t.component.css']

})


export class ManageTComponent implements OnInit {

  displayedColumns = ['id', 'fname', 'lname', 'action'];

  constructor() { }

  ngOnInit() {
  }



}
