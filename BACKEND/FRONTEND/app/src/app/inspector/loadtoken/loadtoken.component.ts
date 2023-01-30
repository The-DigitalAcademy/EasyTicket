import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loadtoken',
  templateUrl: './loadtoken.component.html',
  styleUrls: ['./loadtoken.component.scss']
})
export class LoadtokenComponent implements OnInit {
  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  constructor() { }

  ngOnInit(): void {
  }

}
