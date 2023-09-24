import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllEmpoyees(): Observable<Employee[]> {   // is array
    return this.http.get<Employee[]>(this.baseApiUrl + "/api/Employee")
  }

  addEmployee(newEmployee: Employee): Observable<Employee> { // is object nor array as the above
    newEmployee.id = "00000000-0000-0000-0000-000000000000";
    return this.http.post<Employee>(this.baseApiUrl + "/api/Employee", newEmployee)
  }
  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.baseApiUrl + "/api/Employee/" + id)
  }

  /* by me */
  updateEmployee(updateemplyee: Employee): Observable<Employee> {

    return this.http.put<Employee>(this.baseApiUrl + "/api/Employee", updateemplyee)
  }

  // deleteEmployee(id: string): {
  //   return this.http.delete(this.baseApiUrl + "/api/Employee/" + id)
    
  // }
  deleteEmployee(id: string): Observable<Employee> {
    return this.http.delete<Employee>(this.baseApiUrl + "/api/Employee/" + id)
  }


}
