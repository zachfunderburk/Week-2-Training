import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-serv-demo',
  templateUrl: './serv-demo.component.html',
  styleUrls: ['./serv-demo.component.css']
})
export class ServDemoComponent implements OnInit {

  public employees:any=[]

  constructor(private emp:EmployeesService) 
  {
    this.employees = emp.getEmployees();
  }

  ngOnInit(): void {
  }

}
