import { CanActivate,Router,RouterStateSnapshot,ActivatedRouteSnapshot,CanLoad,Route } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthGuard implements CanActivate,CanLoad {

  constructor( private router : Router) {}

  canLoad(route:Route){
        if(1==1){
        return true;
    }
    return false;
  }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean {
    if(1==1){
        return true;
    }
    this.router.navigate(['/departments']);
    return false;
}
}
