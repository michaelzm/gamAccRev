import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-access-review',
  templateUrl: './access-review.component.html',
  styleUrls: ['./access-review.component.css']
})
export class AccessReviewComponent implements OnInit {
  employeeList: Employee[];
  currentUser: User;


  constructor(private employeeService: EmployeeService,
    private userService: UserService) {

  }

  getEmployeeList(): void{
    this.employeeService.getEmployees()
      .subscribe(employeeList => this.employeeList = employeeList)
  }
  getUser(): void {
    this. currentUser = this.userService.getUser();
  }

  ngOnInit() {
    this.getEmployeeList();
    this.getUser();
  }

  permitRight(): void{
    this.userService.increaseCounter();
    this.userService.increaseUserScore();


  }
  denieRight(): void{
    this.userService.decreaseUserScore();
    this.userService.increaseCounter();

  }

}
