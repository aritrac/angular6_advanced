import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-even',
  templateUrl: './show-even.component.html',
  styleUrls: ['./show-even.component.css']
})
export class ShowEvenComponent implements OnInit {
  @Input() numToDisplay: number;
  constructor() { }

  ngOnInit() {
  }

}
