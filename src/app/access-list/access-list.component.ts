import { Component, OnInit, Input } from "@angular/core";
import { Employee } from "../employee/employee";

@Component({
  selector: "app-access-list",
  templateUrl: "./access-list.component.html",
  styleUrls: ["./access-list.component.css"],
  inputs: ["employeeToDisplay"]
})
export class AccessListComponent implements OnInit {
  @Input() employeeToDisplay: Employee;
  typesOfRights: string[] = [
    "ERP-System",
    "Kalender",
    "Quellcode Softwareprojekte",
    "vertrauliche Excel-Tabellen"
  ];
  constructor() {}
  ngOnInit() {}

  changeAccessRights(selectedOptions): void {
    for (var _i = 0; _i < selectedOptions.length; _i++) {
      console.log(selectedOptions[_i].value);
    }
  }
}
