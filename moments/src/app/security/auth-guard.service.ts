import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {LoginService} from "../services/login.service";



@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const usuario_logado = this.loginService.usuarioLogado();

    if(!usuario_logado){
      if(state.url.endsWith('login')){
        return true;
      }
      this.router.navigate(['login']);
    }else {
      if(state.url.endsWith('login')){
        this.router.navigate(['home'])
      }
    }
    return true;
  }
}

