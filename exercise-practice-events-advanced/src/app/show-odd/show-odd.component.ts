import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-odd',
  templateUrl: './show-odd.component.html',
  styleUrls: ['./show-odd.component.css']
})
export class ShowOddComponent implements OnInit {
  @Input() numToDisplay: number;

  constructor() { }

  ngOnInit() {
  }

}
