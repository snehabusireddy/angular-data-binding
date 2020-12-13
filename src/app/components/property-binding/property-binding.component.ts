import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  isDisabled=false;
  isChildDisabled=false;
  interpolationString = "Test data";

  constructor() { }

  ngOnInit(): void {
  }

  clickBtn(){
    this.isDisabled = true;
  }

}
