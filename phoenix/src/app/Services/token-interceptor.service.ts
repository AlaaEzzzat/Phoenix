import { UserAuthService } from 'src/app/Services/user-auth.service';
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(req: any, next: any) {
    let authService = this.injector.get(UserAuthService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `token ${authService.getToken()}`,
      },
    });
    return next.handel(tokenizedReq);
  }
}
