import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { ActivatedRoute,Router,Params } from '@angular/router';
@Component({
 
  template: `<h3>You selected Department with ID:{{departmentId}}</h3>
            <a (click)="goPrevious()">Previous</a>
            <a (click)="goNext()">Next</a>
            <p><button (click)="goToDepartments()">Bck</button></p>`
 
})
export class DepartmentDetailComponent implements OnInit{

    constructor(private route: ActivatedRoute,private _router:Router){}
    public departmentId:number;
   /* ngOnInit(){
        let id =this.route.snapshot.params['id'];
        this.departmentId=id;
    }*/

    ngOnInit(){
       this.route.params.subscribe((params:Params)=>{
            let id=parseInt(params['id']);
            this.departmentId=id;
       })
    }
goPrevious(){
let previousId=this.departmentId-1;
this._router.navigate(['/departments',previousId]);
}
goNext(){
    let nextId=this.departmentId+1;
    this._router.navigate(['/departments',nextId]);
}
goToDepartments(){
    let selectId=this.departmentId ? this.departmentId : null;
    this._router.navigate(['/departments',{id:selectId}]);
    //this._router.navigate(['../',{id:selectId}],{relativeTo:this.route});
}
}
