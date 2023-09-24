import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  tempEmployeeDetail: Employee = {
    id: '',
    name: '',
    father: '',
    email: '',
    salary: '',
    sex: '',
    department: '',
    password: '',
  }
  constructor(private route: ActivatedRoute, private employeeservice: EmployeesService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.employeeservice.getEmployee(id).subscribe({
            next: (repsonse) => {
              this.tempEmployeeDetail = repsonse;
            }
          })
        }
      }
    })
  }

  updateEmployee() {
    this.employeeservice.updateEmployee(this.tempEmployeeDetail).subscribe({
      next: (updated) => {
        this.router.navigate(['employee'])
      }
    })
  }

  deleteemployee(id: string) {
    this.employeeservice.deleteEmployee(id).subscribe({
      next: (deletedEmployee) => {
        this.router.navigate(['employee'])
      }
    })

  }

  changedOnShowPassword: string = "password";

  myFunction() {
    this.changedOnShowPassword = (this.changedOnShowPassword == "password") ? "text" : "password";
  }
}
