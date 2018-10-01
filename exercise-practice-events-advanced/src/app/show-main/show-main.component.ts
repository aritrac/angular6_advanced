import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-main',
  templateUrl: './show-main.component.html',
  styleUrls: ['./show-main.component.css']
})
export class ShowMainComponent implements OnInit {
  @Input() numVal: number;

  constructor() { }

  ngOnInit() {
  }

}
