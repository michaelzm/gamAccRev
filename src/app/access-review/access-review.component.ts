import { Component, OnInit, ViewChild } from "@angular/core";
import { Employee } from "../employee/employee";
import { EmployeeService } from "../employee/employee.service";
import { UserService } from "../user/user.service";

import { User } from "../user/user";
import { MatSnackBar } from "@angular/material";
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";
import { ProgressBarComponent } from "../progress-bar/progress-bar.component";
import { MatBottomSheet } from "@angular/material";
import { MatBottomSheetConfig } from "@Angular/material";
import { GamificationBottomSheetComponent } from "../gamification-bottom-sheet/gamification-bottom-sheet.component";
import { FinishedBottomSheetComponent } from "../finished-bottom-sheet/finished-bottom-sheet.component";
@Component({
  selector: "app-access-review",
  templateUrl: "./access-review.component.html",
  styleUrls: ["./access-review.component.css"]
})
export class AccessReviewComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;

  scrollOffset = 0;
  employeeList: Employee[];
  currentUser: User;
  progressBarCounter: number;
  buttonDisabled = this.userService.getUserAuthorized();
  constructor(
    private bottomSheet: MatBottomSheet,
    private progressBar: ProgressBarComponent,
    private employeeService: EmployeeService,
    private userService: UserService,
    public gamificationBar: MatSnackBar
  ) {}

  openGamificationBar(message: string) {
    this.gamificationBar.open(message, "✕", {
      duration: 3000
    });
  }
  //later add  more than just one message var
  openBottomSheet() {
    const config: MatBottomSheetConfig = {
      hasBackdrop: false
    };

    this.bottomSheet.open(GamificationBottomSheetComponent, config);
  }
  openBottomSheetAuthorized() {
    const config: MatBottomSheetConfig = {
      hasBackdrop: false
    };
    this.buttonDisabled = false;
    this.bottomSheet.open(FinishedBottomSheetComponent, config);
  }
  getEmployeeList(): void {
    this.employeeService
      .getEmployees()
      .subscribe(employeeList => (this.employeeList = employeeList));

    console.log(this.employeeList.length);
  }

  isButtonDisabled() {
    console.log("isButtonDisabled CALLED");
    return this.buttonDisabled;
    //this.userService.getUserAuthorized();
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
    this.isButtonDisabled();
    this.getEmployeeList();
    this.getUser();
    this.getProgressBarCounter();
    this.getOffset();
  }
  scrollToLast() {
    console.log("OFFSET IS : " + this.scrollOffset);
    this.viewport.scrollToOffset(this.scrollOffset, "smooth");
  }
  scrollToNext() {
    this.viewport.scrollToOffset(
      this.userService.getScrollOffset() + 380,
      "smooth"
    );
  }

  permitRight(): void {
    this.userService.increaseCounter();
    this.userService.increaseProgress();
    //update ProgressBar and refresh variable
    this.progressBar.updateProgressBar();
    this.getProgressBarCounter();
    //this.checkIfRightsGrantedCorrect();
  }
  setOffset(offset: number) {
    this.userService.setScrollOffset(offset);
    this.scrollOffset = offset;
  }
  getOffset() {
    this.scrollOffset = this.userService.getScrollOffset();
  }

  calculateAccuracy() {
    var correct = 0;
    var incorrect = 0;
    var i = 0;
    console.log("$$$$$$$$$$$$$$ TESTING ALL EMPLOYEES UNTIL NOW $$$$$$$$$");
    for (let employee of this.employeeList) {
      if (employee.beenChecked == true) {
        console.log(employee);
        switch (employee.position) {
          case "Werkstudent": {
            if (
              employee.accessRights.hasCal &&
              employee.accessRights.hasErp &&
              !employee.accessRights.hasExcel &&
              !employee.accessRights.hasCode
            ) {
              i++;
              correct++;
              console.log(i + "was correct");
              break;
            } else {
              i++;
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
              i++;
              correct++;
              console.log(i + "was correct");
              break;
            } else {
              i++;
              incorrect++;
              console.log(i + "was incorrect");
              break;
            }
          }
          case "Festangestellt Entwicklung": {
            if (
              employee.accessRights.hasCal &&
              employee.accessRights.hasErp &&
              employee.accessRights.hasCode &&
              !employee.accessRights.hasExcel
            ) {
              i++;
              correct++;
              console.log(i + "was correct");
              break;
            } else {
              i++;
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
              i++;
              correct++;
              console.log(i + "was correct");
              break;
            } else {
              i++;
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
        this.userService.setAccuracy((correct / (correct + incorrect)) * 100);
        console.log(
          "accuracy set to: " + (correct / (correct + incorrect)) * 100
        );
      }
    }
  }
}
