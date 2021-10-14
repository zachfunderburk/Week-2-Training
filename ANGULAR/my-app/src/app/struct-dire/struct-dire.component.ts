import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct-dire',
  templateUrl: './struct-dire.component.html',
  styleUrls: ['./struct-dire.component.css']
})
export class StructDireComponent implements OnInit {

  names = [
    { name: "Kamal"},
    { name: "Mitchel"},
    { name: "Yoon"},
    { name: "Johnson"},
    { name: "Jet Li"}
  ];

  show:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
