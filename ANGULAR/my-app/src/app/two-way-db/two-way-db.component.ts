import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-db',
  templateUrl: './two-way-db.component.html',
  styleUrls: ['./two-way-db.component.css']
})
export class TwoWayDBComponent implements OnInit {

  val: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
