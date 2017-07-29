import { Component,OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { ActivatedRoute,Router,Params } from '@angular/router';
@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
	employees=[];
  errorMsg:string;
	constructor(private _employeeService : EmployeeService,private route: ActivatedRoute,private _router:Router){
       // this.employees=this.route.snapshot.data['employees'];
       
        this.route.data.subscribe(
          data=>{
           
            if(data['employees'].status == 404){
               this.errorMsg = data['employees'];
            }
            else{
              
              this.employees=data['employees'];
            }
            
          });
      
  }
  employeeEdit(employee){
        this._router.navigate(['/employees',employee.id,'edit']);
  }
  ngOnInit(){
	 // this._employeeService.getEmployees()
	 // .subscribe(resEmployeeData=>this.employees=resEmployeeData,
     //         responseEmployeeError=>this.errorMsg = responseEmployeeError);
  }
}
