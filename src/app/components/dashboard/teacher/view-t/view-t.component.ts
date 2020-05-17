import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';
import { ActivatedRoute } from '@angular/router';
// import * as jspdf from 'jspdf';
// import html2canvas from 'html2canvas';
// import * as html2pdf from 'html2pdf.js';

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

    // const options = {
    //   filename: 'Teacher_Details.pdf' ,
    //   image: {type: 'png'},
    //   html2canvas: {},
    //   jsPDF: { orientation: 'landscape'}
    // };


    // const content: Element =  document.getElementById('content');
    // html2pdf()
    // .form(content)
    // .set(options)
    // .save();



  
  //   var data = document.getElementById('content');

  //   html2canvas(data).then((canvas) => {
  //     console.log(canvas);
  //     var imgWidth = 210;
  //     var pageHeight = 295;
  //     var imgHeight = canvas.height * imgWidth / canvas.width;
  //     var heightLeft = imgHeight;

  //     const imgData = canvas.toDataURL ('image/jpg');
  //     let doc = new jspdf('p', 'mm', 'a4');
  //     var position = 0;
  //     doc.addImage(imgData, 'JPG', 0, position, imgWidth, imgHeight);
  //     heightLeft -= pageHeight;

      
  //     doc.save('Tacher_Details.pdf');

  //   });

  //  }

}


