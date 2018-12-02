import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Tracker } from '../tracker';

@Component({
  selector: 'app-access-review',
  templateUrl: './access-review.component.html',
  styleUrls: ['./access-review.component.css']
})
export class AccessReviewComponent implements OnInit {
  employeeList: Employee[];


  constructor(private employeeService: EmployeeService) {}

  getEmployeeList(): void{
    this.employeeService.getEmployees()
      .subscribe(employeeList => this.employeeList = employeeList)
  }
  ngOnInit() {
    this.getEmployeeList();
  }

  permitRight(): void{
    this.score ++;
  }
  denieRight(): void{
    this.score --;
  }

}
