import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TestEventBinding } from '../../model/test-event-binding';

@Component({
  selector: 'app-child-event-binding',
  templateUrl: './child-event-binding.component.html',
  styleUrls: ['./child-event-binding.component.css']
})
export class ChildEventBindingComponent implements OnInit {
  eventBinding = false;

  @Output() eventBindingRequest = new EventEmitter<TestEventBinding>();

  constructor() { }

  ngOnInit(): void {
  }

  eventBindingMethod(){
    let testObj = new TestEventBinding();
    this.eventBindingRequest.emit(testObj);
  }

}
