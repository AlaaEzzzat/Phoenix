import { IUser } from 'src/app/models/iuser';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isUserLogged: boolean = false;
  user: any = [];
  @Output() EnterdEmail: EventEmitter<string> = new EventEmitter<string>();
  constructor(private authService: UserAuthService, private router: Router) {}

  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged;
  }

  login(email: string, password: string) {
    /* this.authService.getUserByEmail(email).subscribe((founded) => {
      this.user = founded;
      console.log(this.user);
      if (this.user.length > 0) {
        console.log('founded');
        localStorage.setItem('userEmail', this.user[0].email);
        if (this.user[0].password == password) {
          (this.EnterdEmail = this.user[0].email),
            console.log(this.EnterdEmail);
          this.isUserLogged = this.authService.isUserLogged;
          let userToken = this.user[0].id;
          console.log(userToken);
          localStorage.setItem('token', userToken);
          this.authService.isUserLoggedSubject.next(true);
          this.router.navigate(['/Home']);
        } else {
          alert('incorrect Password...');
        }
      } else {
        alert('Not Exist E-mail!');
        this.router.navigate(['/Register']);
      }
    }); */
  }
  logout() {
    this.authService.logout();
    this.isUserLogged = this.authService.isUserLogged;
  }
}
