import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Components/edit-employee/edit-employee.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { WelcomEmployeeComponent } from './Components/welcom-employee/welcom-employee.component';
const routes: Routes = [
  {
    path: "home",
    component: WelcomEmployeeComponent  // if this exists the nav bar and other contents become duplicated
  },
  {
    path: "employee",
    component: EmployeeListComponent
  },
  {
    path: "add",
    component: AddEmployeeComponent
  },
  {
    path: "edit/:id",
    component: EditEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
