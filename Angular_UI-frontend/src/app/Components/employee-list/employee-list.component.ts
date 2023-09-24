import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  empoyees: Employee []=[];
  constructor(private employeeservice : EmployeesService) { }
  
  ngOnInit(): void {
    this.employeeservice.getAllEmpoyees().subscribe({
      next: (employee) =>{
      this.empoyees = employee;
      },
      error : (response) =>{
        console.log(response);        
      }
    })
  }

}

//[
//   {
//     id: "2",
//     name: "daiw",
//     email: "daiwt@gamil.com",
//     salary: "4000",
//     department: "cs"
//   },
//   {
//     id: "1",
//     name: "hanna",
//     email: "hanna@gamil.com",
//     salary: "8000",
//     department: "med"
//   },
//   {
//     id: "3",
//     name: "sossia",
//     email: "sossi@gamil.com",
//     salary: "4000",
//     department: "sossi"
//   }
// ];