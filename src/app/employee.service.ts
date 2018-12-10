import { Injectable } from '@angular/core';
import { EMPLOYEES } from './mock-employees';
import { Employee } from './employee';

import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor() { }

  getEmployeesDefault(){
    return EMPLOYEES;
  }
  
  getEmployees(): Observable<Employee[]> {
    return of(EMPLOYEES);
  }


}
