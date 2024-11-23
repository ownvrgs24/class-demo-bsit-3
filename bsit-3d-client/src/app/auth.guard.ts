import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userData = JSON.parse(window.sessionStorage.getItem('user') || '{}') || null;
  return userData && userData.account_id ? true : router.navigate(['/login']);
};

export const mainGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userData = JSON.parse(window.sessionStorage.getItem('user') || '{}') || null;
  return userData && userData.account_id ? router.navigate(['/main']) : true;
};
