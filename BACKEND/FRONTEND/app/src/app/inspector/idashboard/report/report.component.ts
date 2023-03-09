import { Component, OnInit,ElementRef ,ViewChild} from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { InspectorService } from 'src/app/service/inspector.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})


export class ReportComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;

  constructor(private route: Router,private inspectorService:InspectorService,private formBuilder: FormBuilder) { }
  name:any;
  status:any;

  ngOnInit(): void {
    this.inspectorService.getReport().subscribe((res:any) => {
      let result=res;
      this.name=res;
      console.log('result ',result)

    })
  }

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('Passengers_Report.pdf');
    });
  }

}
