import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise-practice-events-advanced';
  generatedNums: number[] = [];

  onNumIncremented(numData: {count: number}) {
    console.log('New Number = ' + numData.count);
    this.generatedNums.push(numData.count);
  }
}
