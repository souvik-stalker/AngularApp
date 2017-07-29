import {Component, OnInit} from '@angular/core';
import {EmployeeService} from './../app/employee.service';
@Component({
    template : `<h3>Error Message :{{errorMsg}}</h3>
                    <h2>Inside Extra Employee List</h2>
                    <ul *ngFor="let employee of employees">
                        <li>{{employee.name | uppercase}} - {{employee.gender | uppercase}}</li>
                    </ul>`
})

export class ExtraComponent implements OnInit {
    employees=[];
  errorMsg:string;
	constructor(private _employeeService : EmployeeService){
  }
    ngOnInit(){
             this._employeeService.getEmployees()
	  .subscribe(resEmployeeData=>this.employees=resEmployeeData,
              responseEmployeeError=>this.errorMsg = responseEmployeeError);
    }
}