import { Component,OnInit,Input,ViewChild,ElementRef,AfterViewInit } from '@angular/core';
@Component({
  selector: 'testc-app',
  template: `
  <br>Hello In Test C  <input type="text" value="{{name}}" #fname placeholder="First name" />`
})
export class TestcComponent implements OnInit,AfterViewInit {
	employees=[];
  errorMsg:string;
  @Input() name:string;
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
