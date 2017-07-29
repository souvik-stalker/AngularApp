import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
@Component({
  selector: 'department-list',
  template :`<h3>Department</h3>
            <ul class="heroes">
              <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
                  <span class="badge">{{department.id}}</span> {{department.name}}
              </li>
            </ul>`
})
export class DepartmentListComponent implements OnInit {
  public selectedId;
  constructor(private _router : Router ,private route: ActivatedRoute){}
  departments=[
    {"id":1,"name":"MongoDB"},
    {"id":2,"name":"Express"},
    {"id":3,"name":"Angular"},
    {"id":4,"name":"Node"}
  ];
ngOnInit(){
       this.route.params.subscribe((params:Params)=>{
            let id1=parseInt(params['id']);
           this.selectedId=id1;
       })
    }
  onSelect(department){
  
    this._router.navigate(['/departments',department.id]);
    //this._router.navigate([department.id],{relativeTo:this.route});
  }

  isSelected(department){
    return department.id==this.selectedId;

  }
}
