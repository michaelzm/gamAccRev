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
    this.checkIfRightsGrantedCorrect();
  }
  checkForGamification() {
    this.checkForGamification;
  }
  checkIfRightsGrantedCorrect() {
    var correct = 0;
    var incorrect = 0;
    var i: Number;
    console.log("$$$$$$$$$$$$$$ TESTING ALL EMPLOYEES UNTIL NOW $$$$$$$$$");
    for (let employee of this.employeeList) {
      if (employee.beenChecked == true) {
        console.log(employee);
        switch (employee.position) {
          case "Werkstudent": {
            if (
              employee.accessRights.hasCal &&
              employee.accessRights.hasExcel &&
              !employee.accessRights.hasErp &&
              !employee.accessRights.hasCode
            ) {
              correct++;
              console.log(i + "was correct");
              break;
            } else {
              incorrect++;
              console.log(i + "was incorrect");
              break;
            }
          }
          case "Praktikant": {
            if (
              employee.accessRights.hasCal &&
              !employee.accessRights.hasErp &&
              !employee.accessRights.hasCode &&
              !employee.accessRights.hasExcel
            ) {
              correct++;
              console.log(i + "was correct");
              break;
            } else {
              incorrect++;
              console.log(i + "was incorrect");
              break;
            }
          }
          case "Festangestellt Entwicklung": {
            if (
              employee.accessRights.hasCal &&
              !employee.accessRights.hasErp &&
              employee.accessRights.hasCode &&
              employee.accessRights.hasExcel
            ) {
              correct++;
              console.log(i + "was correct");
              break;
            } else {
              incorrect++;
              console.log(i + "was incorrect");
              break;
            }
          }
          case "Festangestellt Materialwirtschaft": {
            if (
              employee.accessRights.hasCal &&
              employee.accessRights.hasErp &&
              !employee.accessRights.hasCode &&
              employee.accessRights.hasExcel
            ) {
              correct++;
              console.log(i + "was correct");
              break;
            } else {
              incorrect++;
              console.log(i + "was incorrect");
              break;
            }
          }
          default: {
            console.log(i + " was none of above");
            break;
          }
        }
        console.log(
          " The user had " +
            correct +
            " correct and " +
            incorrect +
            " incorrect: So in total the user had " +
            correct +
            " out of " +
            (correct + incorrect) +
            " correct, which translates to " +
            (correct / (correct + incorrect)) * 100 +
            " Percent."
        );
      }
    }
  }
}
