import { Component, OnInit } from '@angular/core';
import { TestEventBinding } from '../../../model/test-event-binding';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css'],
})
export class PropertyBindingComponent implements OnInit {
  // Variables used in Property Binding Section
  isDisabled = false;
  isChildDisabled = false;
  interpolationString = 'Test data';
  custom_classes = 'custom1 custom2';
  isCustom1 = true;
  color_comp = 'yellowgreen';
  // Variables used in Event Binding Section
  isEventBtnDisabled = false;
  isEventBindingParent = false;

  constructor() {}

  ngOnInit(): void {}

  evnt_binding() {
    this.isEventBtnDisabled = true;
  }
  eventBindingParent(test: TestEventBinding){
    this.isEventBindingParent = !this.isEventBindingParent;
  }
}
