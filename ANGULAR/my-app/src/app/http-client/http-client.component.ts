import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {

  constructor(private studentService : StudentService) { }

  students!: any;

  ngOnInit(): void
  {
    this.studentService.GetStudents().subscribe(data =>
    {this.students = data;});
  }

}
