import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (!isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  
}

function isLoggedIn(): boolean {
    return true;
    //return !!localStorage.getItem('token'); // Verifica se o token existe
  }