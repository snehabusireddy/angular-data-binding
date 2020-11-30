import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDisabled=false;
  isChildDisabled=false;
  interpolationString = "Test data";
  title = 'angular-data-binding';
  

  clickBtn(){
    this.isDisabled = true;
  }
}
