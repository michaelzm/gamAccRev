import { Component, OnInit, ViewChild } from "@angular/core";
import { EmployeeService } from "../employee/employee.service";
import { Employee } from "../employee/employee";
import { EMPLOYEES } from "../employee/mock-employees";
import { MatPaginator, MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  employees: Employee[];
  columns: string[];
  dataSource = new MatTableDataSource<Employee>(EMPLOYEES);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private employeeService: EmployeeService) {}

  getEmployeeList(): void {
    this.employeeService
      .getEmployees()
      .subscribe(employeeList => (this.employees = employeeList));
    //console.log("Employees fetched");
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
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
      return "✕";
    } else return "✓";
  }
}
