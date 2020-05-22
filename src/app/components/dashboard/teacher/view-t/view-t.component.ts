import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';
import { ActivatedRoute } from '@angular/router';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-view-t',
  templateUrl: './view-t.component.html',
  styleUrls: ['./view-t.component.css']
})
export class ViewTComponent implements OnInit {

  private id: string;
  public teacher;


  constructor(
    private teacherService: TeacherService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.id = params.id;
      this.getTeacherDetails(this.id);
    });
  }

  getTeacherDetails(id: string) {
    this.teacherService.getTeacherId(id).subscribe(
      (res: any) => {
        this.teacher = res.data;
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  public downloadpdf() {

    const options = {
      margin: 0,
      filename: 'Teacher_Details.pdf' ,
      image: {type: 'jpeg'},
      html2canvas: {},
      jsPDF: { orientation: 'landscape'}
    };


    const content: Element =  document.getElementById('content');
    html2pdf()
    .from(content)
    .set(options)
    .save();

  }



}


