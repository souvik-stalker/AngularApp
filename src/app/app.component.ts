import { Component } from '@angular/core';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeService } from './employee.service';
import { Router,Event,NavigationStart,NavigationEnd,NavigationError,NavigationCancel } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[EmployeeService]
})
export class AppComponent {
title = 'app';
loading:boolean=true;
  constructor(private _router:Router){
 
    _router.events.subscribe((routerEvent:Event)=>{
        this.checkRouterEvent(routerEvent);
    });

  }
  checkRouterEvent(routerEvent:Event):void{
      if(routerEvent instanceof NavigationStart){
        this.loading=true;
      }
      if(routerEvent instanceof NavigationError ||
        routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel){
          this.loading=false;
        }
  }
  
  
  
}
