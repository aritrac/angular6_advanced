import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //we can directly use an external template html file as in this case, or we can directly add the template code here with the 'template' property
  //template: `
  //    <app-servers><app-servers>
  //    <app-servers><app-servers>
  //`
  templateUrl: './app.component.html',
  //we can add multiple stylesheets by adding them to the array below
  //styleUrls: ['./app.component.css']
  //we also can directly specify the styles without external sytlesheets using the 'styles' property as shown below
  styles: [`
      h3 {
        color: orange
      }
        `]

})
export class AppComponent {
  
}
