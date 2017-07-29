import { OnInit,ViewChild,ElementRef,AfterViewInit,ViewChildren,QueryList,Component, ViewContainerRef,ComponentFactoryResolver  } from '@angular/core';
import { EmployeeService } from './employee.service';
import { ActivatedRoute,Router,Params } from '@angular/router';
import { TestComponent } from './test.component';
import { TestbComponent } from './testb.component';
import { TestcComponent } from './testc.component';
@Component({
  templateUrl: './employee-edit.component.html',
})
export class EmployeeEditComponent implements OnInit,AfterViewInit {
	employees=[];
  errorMsg:string;
  @ViewChild('testapp') testComponent:TestComponent;
  @ViewChildren(TestbComponent) testb:QueryList<TestbComponent>;
  @ViewChild("childContainer", { read: ViewContainerRef }) childContainer: ViewContainerRef;

  private childArr:Array<TestbComponent>;
	constructor(private viewContainer: ViewContainerRef, private _cr: ComponentFactoryResolver){
  }
  
  ngOnInit(){
	
  }
  ngAfterViewInit():void{
   this.childArr=this.testb.toArray();
  }
loadChild = (): void => {
         const factory = this._cr.resolveComponentFactory(TestcComponent);
        const ref = this.childContainer.createComponent(factory);
        ref.instance.name="souvik";
        ref.instance.makeBckColor="black";
        ref.instance.makeColor="yellow";
        ref.instance.makeLog();
        ref.changeDetectorRef.detectChanges();
        
      }
  btnClick(){
    this.testComponent.makeColor='red';
    this.testComponent.makeBckColor='grey';
    this.childArr[0].makeColor="blue";
    this.childArr[0].makeBckColor="yellow";
    this.childArr[0].makeLog();
    this.testComponent.makeLog();
    this.childArr[1].makeColor="grey";
    this.childArr[1].makeBckColor="blue";
    this.childArr[1].makeLog();
    this.testComponent.makeLog();

  }
}
