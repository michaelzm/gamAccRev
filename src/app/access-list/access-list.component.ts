import { Component, OnInit, Input } from "@angular/core";
import { Employee } from "../employee/employee";
import { AccessReviewComponent } from "../access-review/access-review.component";
import { GamificationTrackerService } from "../gamification-tracker.service";

@Component({
  selector: "app-access-list",
  templateUrl: "./access-list.component.html",
  styleUrls: ["./access-list.component.css"],
  inputs: ["employeeToDisplay"]
})
export class AccessListComponent implements OnInit {
  @Input() employeeToAlterRights: Employee;
  typesOfRights: string[] = [];

  typesOfRightsOld: string[] = [
    "ERP-System",
    "Kalender",
    "Quellcode Softwareprojekte",
    "vertrauliche Excel-Tabellen"
  ];
  constructor(
    private accessReviewComponent: AccessReviewComponent,
    public gamificationTracker: GamificationTrackerService
  ) {}

  ngOnInit() {
    this.shuffleArray();
  }

  //fisher yates shuffle
  shuffleArray() {
    this.typesOfRightsOld;
    for (let i = 0; i < this.typesOfRightsOld.length; i++) {
      const randomIndex = Math.floor(
        Math.random() * this.typesOfRightsOld.length
      );
      [this.typesOfRightsOld[i], this.typesOfRightsOld[randomIndex]] = [
        this.typesOfRightsOld[randomIndex],
        this.typesOfRightsOld[i]
      ];
    }
    console.log("shuffeling the currently displayed access rights");
    this.typesOfRights = this.typesOfRightsOld;
  }

  checkIfSelected(hasToGetChecked) {
    switch (hasToGetChecked) {
      case "ERP-System":
        if (this.employeeToAlterRights.accessRights.hasErp == true) {
          return true;
        } else return false;
      case "Kalender":
        if (this.employeeToAlterRights.accessRights.hasCal) {
          return true;
        } else return false;
      case "Quellcode Softwareprojekte":
        if (this.employeeToAlterRights.accessRights.hasCode) {
          return true;
        } else return false;
      case "vertrauliche Excel-Tabellen":
        if (this.employeeToAlterRights.accessRights.hasExcel) {
          return true;
        } else return false;
    }
  }

  printToConsole(toPrint) {
    console.log(toPrint);
  }
  /*
  wipeEmployeeRights() sets all rights of the given employee to false, so if ones about to change the rights twice, it will start from the scratch
  */
  changeAccessRights(selectedOptions): void {
    this.wipeEmployeeRights();
    //console.log(selectedOptions);
    //console.log(this.employeeToAlterRights.beenChecked);
    for (var _i = 0; _i < selectedOptions.length; _i++) {
      switch (selectedOptions[_i].value) {
        case "ERP-System": {
          this.employeeToAlterRights.accessRights.hasErp = true;
          break;
        }
        case "Kalender": {
          this.employeeToAlterRights.accessRights.hasCal = true;
          break;
        }
        case "Quellcode Softwareprojekte": {
          this.employeeToAlterRights.accessRights.hasCode = true;
          break;
        }
        case "vertrauliche Excel-Tabellen": {
          this.employeeToAlterRights.accessRights.hasExcel = true;
          break;
        }
      }
    }
    //console.log(selectedOptions.length);
    if (this.employeeToAlterRights.beenChecked == false) {
      this.accessReviewComponent.permitRight();
      this.employeeToAlterRights.beenChecked = true;
      console.log(
        "The Offset to scroll to is now: " +
          this.accessReviewComponent.viewport.measureScrollOffset()
      );
      this.accessReviewComponent.setOffset(
        this.accessReviewComponent.viewport.measureScrollOffset()
      );
      //this.accessReviewComponent.buttonDisabled = false;
      this.gamificationTracker.checkForGamificationPopup();
      this.checkIfAuthorized();
    }
  }
  //has to get called in this component to take effect immediatly without refresh
  checkIfAuthorized() {
    if (this.accessReviewComponent.buttonDisabled) {
      if (this.gamificationTracker.checkIfAuthorizedForEvaluation()) {
        this.accessReviewComponent.buttonDisabled = false;
      }
    }
  }

  wipeEmployeeRights() {
    this.employeeToAlterRights.accessRights.hasCal = false;
    this.employeeToAlterRights.accessRights.hasCode = false;
    this.employeeToAlterRights.accessRights.hasErp = false;
    this.employeeToAlterRights.accessRights.hasExcel = false;
  }
}
