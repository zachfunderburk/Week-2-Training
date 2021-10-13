import { Component, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent implements OnInit {

  course="Angular"; //New Property that can be used in the New Comp HTML doc
  constructor() { 
    alert('Constructor Alerted')
  }

  ngOnInit(): void {
    alert('ngOnInit Alert')
  }

  // ngOnChanges():SimpleChange
  // {
  //   alert('ngOnChanges Alert')
  // }

}
