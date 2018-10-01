import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = ''; commented this out as newServerName is being fetched from the HTMLInputElement reference using local references
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput.value);
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
  }

}
