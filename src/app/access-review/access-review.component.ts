import { Component, OnInit } from "@angular/core";
import { Employee } from "../employee/employee";
import { EmployeeService } from "../employee/employee.service";
import { UserService } from "../user/user.service";
import { User } from "../user/user";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-access-review",
  templateUrl: "./access-review.component.html",
  styleUrls: ["./access-review.component.css"]
})
export class AccessReviewComponent implements OnInit {
  employeeList: Employee[];
  currentUser: User;
  progressBarCounter: number;

  constructor(
    private employeeService: EmployeeService,
    private userService: UserService,
    public gamificationBar: MatSnackBar
  ) {}

  openGamificationBar(message: string) {
    this.gamificationBar.open(message, "Ok", {
      duration: 3000
    });
  }

  getEmployeeList(): void {
    this.employeeService
      .getEmployees()
      .subscribe(employeeList => (this.employeeList = employeeList));
  }
  getUser(): void {
    this.currentUser = this.userService.getUser();
  }
  /*
  implement as rxjs observer
  */

  getUserCounter(): void {
    this.progressBarCounter = this.userService.getUserCounter();
  }

  ngOnInit() {
    this.getEmployeeList();
    this.getUser();
    this.getUserCounter();
  }

  permitRight(value: number): void {
    this.userService.increaseCounter();
    this.userService.increaseUserScoreByValue(value);
    this.getUserCounter();
  }
  checkForGamification() {
    this.checkForGamification;
  }
}
