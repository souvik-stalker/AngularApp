import { Component,OnInit,Input,ViewChild,ElementRef,AfterViewInit } from '@angular/core';
@Component({
  selector: 'test-app',
  template: `
  Hello In Test --- {{messageData}}
  <input type='color'/>
  <input type="text" #fname placeholder="First name" />
  <input type="text" #lname placeholder="Last name" />
  `
})
export class TestComponent implements OnInit,AfterViewInit {
	employees=[];
  errorMsg:string;
  @ViewChild('fname') fName:ElementRef;
  @ViewChild('lname') lName:ElementRef;
  @Input() messageData: string;
  public makeColor:string;
  public makeBckColor:string;
	constructor(){
       
      
  }
  makeLog(){
      this.fName.nativeElement.style.color=this.makeColor;
      this.fName.nativeElement.style.backgroundColor=this.makeBckColor;
      this.lName.nativeElement.style.color=this.makeColor;
      this.lName.nativeElement.style.backgroundColor=this.makeBckColor  ;
  }
  ngOnInit(){
	console.log(this.messageData);
  }
 ngAfterViewInit(){
    
}

}
