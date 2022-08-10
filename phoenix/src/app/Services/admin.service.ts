import { IUser } from './../models/iuser';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  httpOptions: {};
  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  addUser(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(
      `${environment.ApiUrl}/Users`,
      JSON.stringify(user),
      this.httpOptions
    );
  }
}
