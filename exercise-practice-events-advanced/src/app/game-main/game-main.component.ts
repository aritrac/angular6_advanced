import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-main',
  templateUrl: './game-main.component.html',
  styleUrls: ['./game-main.component.css']
})
export class GameMainComponent implements OnInit {
  @Output() numIncremented = new EventEmitter<{count: number}>();
  // this will get incremented and be sent as a part of every event emitted
  currentCount = 0;
  gameStarted = false;
  // stores a reference to the currently running interval method
  interval;

  constructor() { }

  ngOnInit() {
  }

  // starts the game and event emission process
  onGameStart() {
    // every second call emitNumIncrementEvent() method
    this.interval = setInterval(() => {
      this.numIncremented.emit({count: ++this.currentCount});
    }, 1000);

    // disabling the Start Game button
    this.gameStarted = true;
  }

  // stops the game and the event emission process
  onGameStop() {
    // clear previously running method
    if (this.interval) {
        clearInterval(this.interval);
    }
    // enabling the Stop Game button
    this.gameStarted = false;
  }

}
