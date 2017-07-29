import { RouterModule,Routes } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { ExtraComponent } from './extra.component';

const routes:Routes=[
    {path:'',component:ExtraComponent}
];

export const routing :ModuleWithProviders= RouterModule.forChild(routes);