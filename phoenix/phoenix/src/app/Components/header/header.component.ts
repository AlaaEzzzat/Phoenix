import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isUserLogged: boolean = false;
  userEmail: string = '';
  constructor(private authService: UserAuthService, private route: Router) {
    this.isUserLogged = this.authService.isUserLogged;
  }

  ngOnInit(): void {}
  logout() {
    var confirmtion = confirm('Sure! You want to leave US!');
    if (confirmtion) {
      this.authService.logout();
      this.isUserLogged = this.authService.isUserLogged;
      this.route.navigate(['/Login']);
    }
  }
}
