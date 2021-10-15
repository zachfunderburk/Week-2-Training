import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-db',
  templateUrl: './one-way-db.component.html',
  styleUrls: ['./one-way-db.component.css']
})
export class OneWayDBComponent implements OnInit {

  userName = 'John';

  onShow()
  {
      alert('Event Data Binding Alert');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
