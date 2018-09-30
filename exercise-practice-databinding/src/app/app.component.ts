import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'exercise-practice-databinding';
  isClickable = false;

  userName = "";

  onUpdateUserName(event: any){
    this.userName = (<HTMLInputElement>event.target).value;
    if(this.userName.length > 0){
      this.isClickable = true;
    }else{
      this.isClickable = false;
    }
  }

  onClickEmptyUserName(){
    this.userName = "";
    this.isClickable = false;
  }
}
