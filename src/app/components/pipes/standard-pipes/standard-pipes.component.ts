import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard-pipes',
  templateUrl: './standard-pipes.component.html',
  styleUrls: ['./standard-pipes.component.css']
})
export class StandardPipesComponent implements OnInit {

  test_date =  new Date(2019, 6, 14);
  word = 'WoRd';
  amount = 22.452345;
  customPipeInput = "Angular";

  constructor() { }

  ngOnInit(): void {
  }

}
