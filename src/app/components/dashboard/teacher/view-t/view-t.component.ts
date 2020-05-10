import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';
import { ActivatedRoute } from '@angular/router';
import * as jspdf from 'jspdf';
// import html2canvas from 'html2canvas';


@Component({
  selector: 'app-view-t',
  templateUrl: './view-t.component.html',
  styleUrls: ['./view-t.component.css']
})
export class ViewTComponent implements OnInit {

  private id: string;
  public teacher;

  constructor(
    private studentService: TeacherService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.id = params.id;
      this.getTeacherDetails(this.id);
    });
  }

  getTeacherDetails(id: string) {
    this.studentService.getTeacherId(id).subscribe(
      (res: any) => {
        this.teacher = res.data;
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  // public downloadpdf() {

  //   const data = document.getElementById('content');

  //   html2canvas(data).then((canvas) => {
  //     console.log(canvas);

  //     const imgData = canvas.toDataURL ('image/png');
  //     const doc = new jspdf();
  //     doc.addImage(imgData, 0, 0, 208, 500);

  //     doc.save('Test.pdf');

  //   });

  // }

  }


