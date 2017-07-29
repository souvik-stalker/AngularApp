import { Component,OnInit,Input,ViewChild,ElementRef,AfterViewInit } from '@angular/core';
@Component({
  selector: 'testb-app',
  template: `
  <br>Hello In Test b  <input type="text" #fname placeholder="First name" />`
})
export class TestbComponent implements OnInit,AfterViewInit {
	employees=[];
  errorMsg:string;
  @ViewChild('fname') fName:ElementRef;
  public makeColor:string;
  public makeBckColor:string;
	constructor(){
       
      
  }
  makeLog(){
      this.fName.nativeElement.style.color=this.makeColor;
      this.fName.nativeElement.style.backgroundColor=this.makeBckColor;
  }
  ngOnInit(){
  }
 ngAfterViewInit(){
    
}

}
