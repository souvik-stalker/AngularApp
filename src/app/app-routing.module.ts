import { NgModule } from '@angular/core';
import { RouterModule,Routes,PreloadAllModules } from '@angular/router';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { DepartmentListComponent } from './department-list.component';
import { DepartmentDetailComponent } from './department-detail.component';
import { EmployeeEditComponent } from './employee-edit.component';
import { EmployeeEditInfoComponent } from './employee-edit-info.component';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { EmployeeResolver } from './employee-resolver.service';
import { EmployeeDetailResolver } from './employee-detail-resolver.service';
import { EmployeeService } from './employee.service';
import { MessageComponent } from './message.component';
import { AuthGuard } from './auth-guard.service';
import { SelectiveStrategy } from './selective-strategy.service';
import { TestComponent } from './test.component';
import { TestbComponent } from './testb.component';
import { TestcComponent } from './testc.component';
const routes:Routes=[
    //{path:'',component:DepartmentListComponent},
    //prefix,full
    
    {path:'',redirectTo:"/departments",pathMatch:'full'},
    //{path:'',component:HomeComponent},
    {
      path:'employees',component:EmployeeListComponent,
       resolve: { employees: EmployeeResolver },
      
    },
    {
      path:'employees/:id/edit',
      component:EmployeeEditComponent,
      canActivate:[AuthGuard],
      
      children:[
        {path:'',redirectTo:"info",pathMatch:'full'},
        {path:'info',component:EmployeeEditInfoComponent,resolve: { employee: EmployeeDetailResolver },},
        
      ]
  
    },  
    {path:'departments',component:DepartmentListComponent},
    {path:'departments/:id',component:DepartmentDetailComponent},
    {
      path:'extra',
      loadChildren:'extramodule/extra.module#ExtraModule',
      data:{preload:true},
      canActivate:[AuthGuard]},
    {path:'message',component:MessageComponent,outlet:"popup"},
    {path:'**',component:PageNotFoundComponent}
    
    ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{preloadingStrategy:SelectiveStrategy})
    //,{enableTracing:true,preloadingStrategy:PreloadAllModules}
  ],
  exports: [
       RouterModule 
  ],
  providers:[
    EmployeeResolver,EmployeeService,EmployeeDetailResolver,SelectiveStrategy
  ]
})

export class AppRoutingModule{}
export const routingComponents=[
  EmployeeDetailComponent,
  DepartmentListComponent,
  EmployeeListComponent,
  DepartmentDetailComponent,
  HomeComponent,
  PageNotFoundComponent,
  EmployeeEditComponent,
  EmployeeEditInfoComponent,
  MessageComponent,
  TestComponent,
  TestbComponent,
  TestcComponent];