import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comp-child',
  templateUrl: './comp-child.component.html',
  styleUrls: ['./comp-child.component.css']
})
export class CompChildComponent implements OnInit {

  @Input() propBinding: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
