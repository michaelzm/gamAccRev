import { Component, OnInit, Input } from "@angular/core";
import { Employee } from "../employee/employee";
import { AccessReviewComponent } from "../access-review/access-review.component";
import { UserService } from "../user/user.service";

@Component({
  selector: "app-access-list",
  templateUrl: "./access-list.component.html",
  styleUrls: ["./access-list.component.css"],
  inputs: ["employeeToDisplay"]
})
export class AccessListComponent implements OnInit {
  @Input() employeeToAlterRights: Employee;
  typesOfRights: string[] = [
    "ERP-System",
    "Kalender",
    "Quellcode Softwareprojekte",
    "vertrauliche Excel-Tabellen"
  ];
  constructor(
    private accessReviewComponent: AccessReviewComponent,
    private userService: UserService
  ) {}
  ngOnInit() {}

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

  changeAccessRights(selectedOptions): void {
    console.log(selectedOptions);
    console.log(this.employeeToAlterRights.beenChecked);
    this.wipeEmployeeRights();
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
    console.log(selectedOptions.length);
    if (this.employeeToAlterRights.beenChecked == false) {
      this.accessReviewComponent.permitRight(selectedOptions.length);
      this.employeeToAlterRights.beenChecked = true;
    }
  }

  wipeEmployeeRights() {
    this.employeeToAlterRights.accessRights.hasCal = false;
    this.employeeToAlterRights.accessRights.hasCode = false;
    this.employeeToAlterRights.accessRights.hasErp = false;
    this.employeeToAlterRights.accessRights.hasExcel = false;
  }
}