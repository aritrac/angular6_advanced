import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise-practice-directives';
  isParaVisible = false;
  clickDetails = [];

  onClickTogglePara() {
    // The toggling logic for the para visibility
    this.isParaVisible = !this.isParaVisible;

    // storing the click number in the clickDetails array
    // so the ngFor can iterate over it to display the click-details-component n times
    this.clickDetails.push(this.clickDetails.length + 1);
  }
}
