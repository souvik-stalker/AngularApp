import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { EmployeeService } from './employee.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
@Injectable()

export class EmployeeResolver implements Resolve<any>{

    constructor(private _employeeService : EmployeeService,private router: Router){}
    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): Observable<any> {
           let id=route.params['id'];
            // let id = route.paramMap.get('id');
       /* if (isNaN(id)) {
            console.log(`Product id was not a number`);
            this.router.navigate(['/departments']);
            return Observable.of(null);
        }*/

           return this._employeeService.getEmployees()
            .map(employees => {
                if (employees) {
                    return employees;
                }
                console.log(`Product was not found: ${id}`);
                return null;
            })
            .catch(error => {
                console.log(`Retrieval error: ${error}`);
                return Observable.of(error);
            });
    }
}