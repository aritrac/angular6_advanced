import { Component, OnInit } from '@angular/core';

@Component({
  //we can have either element selectors as below or we can have attribute selectors. Both the flavours are shown below
  selector: 'app-servers',        //element selector
  //selector: '[app-servers]',    //attribute selector
  //selector: '.app-servers',     //class selector
  template: `<app-server></app-server>
             <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}