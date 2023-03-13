import { Component, OnInit,ElementRef ,ViewChild} from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { InspectorService } from 'src/app/service/inspector.service';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;

  constructor(private route: Router,private inspectorService:InspectorService,private formBuilder: FormBuilder) { }
  name:any;
  status:any;
  q:any
  today:any
  day:any
  mon:any
  year:any
  ngOnInit(): void {
    this.inspectorService.getdailyReport().subscribe((res:any) => {
      let result=res;
      this.name=res;


    })

    this.day=new Date().getDay();
    this.mon=new Date().getMonth();
    this.year=new Date().getFullYear();

    this.today=formatDate(Date.now(),'yyyy-MM-dd','en-US');
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
      PDF.save('Passengers_Daily_Report.pdf');
    });
  }

}
