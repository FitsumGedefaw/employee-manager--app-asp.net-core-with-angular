import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  newEmployeeData: Employee = {
    id : '',
    name : '',
    father : '',
    email : '', 
    salary : '', 
    sex : '',
    department : '',
    password : '',
  }

  constructor(private employeeService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
  }
  addNewEmployeetoDB() {
    this.employeeService.addEmployee(this.newEmployeeData).subscribe({
      next: (employee) => {
        // console.log(employee);
        this.router.navigate(['employee'])
      }
    })
  }

}
