import { Component, OnInit, Input } from "@angular/core";
import { Employee } from "../employee/employee";

@Component({
  selector: "app-employee-detail",
  templateUrl: "./employee-detail.component.html",
  inputs: ["employeeToDisplay"]
})
export class EmployeeDetailComponent implements OnInit {
  @Input() employeeToDisplay: Employee;
  constructor() {}

  ngOnInit() {}
}
