import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-serv-demo2',
  templateUrl: './serv-demo2.component.html',
  styleUrls: ['./serv-demo2.component.css']
})
export class ServDemo2Component implements OnInit {

  public employees:any=[]

  constructor(private emp:EmployeesService) 
  {
    this.employees = emp.getEmployees();
  }
  ngOnInit(): void {
  }

}
