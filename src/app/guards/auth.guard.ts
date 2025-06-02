import { inject, Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { CanActivate, Router } from '@angular/router';
import { Auth as FirebaseAuth } from 'firebase/auth';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private auth = inject(Auth);
  constructor(private router: Router) { }

  canActivate() {
    return authState(this.auth).pipe(map((user) => {
      if (user) return true;
      this.router.navigate(['/login']);
      return false;
    }));
  }

};
