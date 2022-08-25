import { IUser } from 'src/app/models/iuser';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  isUserLoggedSubject: BehaviorSubject<boolean>;
  httpOptions: {};
  constructor(private httpClient: HttpClient) {
    this.isUserLoggedSubject = new BehaviorSubject<boolean>(this.isUserLogged);
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }
  /* getUserByEmail(email: string): Observable<IUser> {
    return this.httpClient.get<IUser>(
      `${environment.ApiUrl}/Users?email=${email}`
    );
  } */
  logout() {
    localStorage.removeItem('token');
    this.isUserLoggedSubject.next(false);
  }

  get isUserLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
  getUserLoggedStatus(): Observable<boolean> {
    return this.isUserLoggedSubject.asObservable();
  }
  getToken(): any {
    return localStorage.getItem('token');
  }
}
