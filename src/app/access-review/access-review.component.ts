import { Component, OnInit, ViewChild } from "@angular/core";
import { Employee } from "../employee/employee";
import { EmployeeService } from "../employee/employee.service";
import { UserService } from "../user/user.service";
import { User } from "../user/user";
import { MatSnackBar } from "@angular/material";
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";
import { ProgressBarComponent } from "../progress-bar/progress-bar.component";
@Component({
  selector: "app-access-review",
  templateUrl: "./access-review.component.html",
  styleUrls: ["./access-review.component.css"]
})
export class AccessReviewComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;

  scrollOffset = 215;
  employeeList: Employee[];
  currentUser: User;
  progressBarCounter: number;
  triggerAnimation() {}

  constructor(
    private progressBar: ProgressBarComponent,
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

    console.log(this.employeeList.length);
  }
  getUser(): void {
    this.currentUser = this.userService.getUser();
  }
  /*
  implement as rxjs observer
  */
  getProgressBarCounter(): void {
    this.progressBarCounter = this.userService.getProgressBarCounter();
  }

  ngOnInit() {
    this.getEmployeeList();
    this.getUser();
    this.getProgressBarCounter();
  }

  permitRight(): void {
    this.userService.increaseCounter();
    this.userService.increaseProgress();
    this.progressBar.updateProgressBar();
    this.getProgressBarCounter();
    this.viewport.scrollToIndex(3);
  }
  checkForGamification() {
    this.checkForGamification;
  }
}
