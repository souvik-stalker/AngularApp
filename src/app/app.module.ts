import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeDetailComponent } from './employee-detail.component';
import { routingComponents } from './app-routing.module';
import { AuthGuard } from './auth-guard.service';
import { TestcComponent } from './testc.component';
@NgModule({
  declarations: [
    AppComponent,
  routingComponents,
  TestcComponent
  ],
 entryComponents: [TestcComponent],
  imports: [
    BrowserModule,HttpModule,AppRoutingModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
