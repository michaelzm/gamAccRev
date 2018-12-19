import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee/employee.service";
import { Employee } from "../employee/employee";
import { Observable } from "rxjs";
import { EMPLOYEES } from "../employee/mock-employees";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  employees: Employee[];
  columns: string[];
  dataSource = EMPLOYEES;

  constructor(private employeeService: EmployeeService) {}

  getEmployeeList(): void {
    this.employeeService
      .getEmployees()
      .subscribe(employeeList => (this.employees = employeeList));
    console.log("Employees fetched");
  }

  ngOnInit() {
    this.getEmployeeList();
    this.columns = [
      "Vorname",
      "Nachname",
      "Position",
      "ERP",
      "Kalender",
      "Code",
      "Excel"
    ];
  }
  convertToSymbol(hasRight: boolean): string {
    if (hasRight == false) {
      return "nicht erlaubt";
    } else return "erlaubt";
  }
}
