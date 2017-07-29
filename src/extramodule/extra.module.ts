import {NgModule} from '@angular/core';
import {ExtraComponent} from './extra.component';
import {routing} from './extra.routing';
import { CommonModule } from '@angular/common';
@NgModule({
imports:[routing,CommonModule],
declarations:[ExtraComponent]
})

export class ExtraModule{}