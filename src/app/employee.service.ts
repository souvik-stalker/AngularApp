import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class EmployeeService{
	
	private _url : string="./assets/employeedata.json";
	constructor(private _http: Http){}
	getEmployees(){
		
		return this._http.get(this._url)
		.map((response:Response)=>response.json())
		.catch(this._errorHandler);
		
	}
	_errorHandler(error:Response){
			console.error(error);
			return Observable.throw(error || "Server Error");
	}

	getEmployee(id){
		return this._http.get(this._url)
		.map((response:Response)=>{
			let data=response.json();
			var final_data;
			
			for (var i = 1; i <= data.length; i++) {
				if(i==id){
						return data[id-1];
				}
				
			}
			
			
		})
		.catch(this._errorHandler);
	}
}