import { Component } from '@angular/core';
import {Router,Route} from '@angular/router';
@Component({
 
  template: `<h3>Welcome to angular Message</h3>
             <a (click)="clearMessage()">Clear</a>`,
  
})
export class MessageComponent {
 
    constructor(private _router:Router){}
    clearMessage(){
        this._router.navigate([{outlets:{popup:null}}]);
    }
}
