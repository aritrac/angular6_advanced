import { Component,
         OnInit,
         Input,
         ViewEncapsulation,
         OnChanges,
         SimpleChanges,
         DoCheck,
         AfterContentInit,
         AfterContentChecked,
         AfterViewInit,
         AfterViewChecked,
         OnDestroy
       } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None removes separation of css styles unique for each component
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input() element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() {
    console.log('constructor called!');
  }

  // ngOnChanges            - called after a bound input property changes
  // ngOnInit               - called once the component is initialized
  // ngDoCheck              - called during every change detection run
  // ngAfterContentInit     - called after content (ng-content) has been projected into view
  // ngAfterContentChecked  - called every time the projected content has been checked
  // ngAfterViewInit        - called after the component's view (and child views) has been initialized
  // ngAfterViewChecked     - called every time the view (and child views) has been checked
  // ngOnDestroy            - called once the component is about to be destroyed
  ngOnInit() {
    console.log('ngOnInit called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }

}
