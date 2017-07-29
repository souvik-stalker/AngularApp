import { Component,OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { ActivatedRoute,Router,Params } from '@angular/router';
@Component({
  templateUrl: './employee-edit-info.component.html',
})
export class EmployeeEditInfoComponent implements OnInit {
  employee:any;
  errorMsg:string;
	constructor(private _employeeService : EmployeeService,private route: ActivatedRoute){
  }
  
  ngOnInit(){
	  this.route.data.subscribe(
          data=>{
           
            if(data['employee'].status == 404){
               this.errorMsg = data['employee'];
            }
            else{
              
              this.employee=data['employee'];
            }
            
          });
  }
}
