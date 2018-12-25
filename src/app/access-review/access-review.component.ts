import { Component, OnInit, ViewChild } from "@angular/core";
import { Employee } from "../employee/employee";
import { EmployeeService } from "../employee/employee.service";
import { UserService } from "../user/user.service";
import { User } from "../user/user";
import { MatSnackBar } from "@angular/material";
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";

@Component({
  selector: "app-access-review",
  templateUrl: "./access-review.component.html",
  styleUrls: ["./access-review.component.css"]
})
export class AccessReviewComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;
  scrollIndex = 8;
  employeeList: Employee[];
  currentUser: User;
  progressBarCounter: number;
  triggerAnimation() {}

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
  scrollToNext() {
    this.viewport.scrollToIndex(this.scrollIndex, "smooth");
    this.scrollIndex += 8;
  }
  getEmployeeList(): void {
    this.employeeService
      .getEmployees()
      .subscribe(employeeList => (this.employeeList = employeeList));

    console.log(this.employeeList.length);
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
