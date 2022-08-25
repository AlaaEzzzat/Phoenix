import { UserAuthService } from 'src/app/Services/user-auth.service';
import { Router } from '@angular/router';
import { IUser } from './../../models/iuser';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: IUser = {} as IUser;
  Foundeduser: any = [];
  usrFormGroup: FormGroup;
  emailPattern: string = '[a-zA-Z0-9+_.-]+@gmail.com';
  myPassword: any;
  constructor(
    private authService: UserAuthService,
    private router: Router,
    private fb: FormBuilder,
    private AdminService: AdminService
  ) {
    this.usrFormGroup = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', Validators.required],
      mobileNo: this.fb.array([fb.control('', Validators.required)]),
      address: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: ['', Validators.required],
    });
  }

  get fullName() {
    return this.usrFormGroup.get('fullName');
  }
  get email() {
    return this.usrFormGroup.get('email');
  }
  get mobileNo() {
    return this.usrFormGroup.get('mobileNo') as FormArray;
  }
  get address() {
    return this.usrFormGroup.get('address');
  }
  get city() {
    return this.usrFormGroup.get('city');
  }
  get country() {
    return this.usrFormGroup.get('country');
  }

  get password() {
    return this.usrFormGroup.get('password');
  }
  get rePassword() {
    return this.usrFormGroup.get('rePassword');
  }

  addMobile() {
    this.mobileNo.push(this.fb.control(''));
  }
  removeMobile() {
    this.mobileNo.removeAt(-1);
  }

  addUser() {
    this.user = this.usrFormGroup.value;
    console.log(this.user);

    /* this.authService.getUserByEmail(this.user.email).subscribe((founded) => {
      this.Foundeduser = founded;
      console.log(this.user);
      if (this.Foundeduser.length > 0) {
        alert('This Email has been Registered before ! pls Enter Another');
      } else {
        this.AdminService.addUser(this.user).subscribe({
          next: (user) => {
            alert('Added!');
            this.router.navigate(['/Home']);
          },
          error: (err) => {
            alert('Error occured in insert Function ');
          },
        });
      }
    }); */
  }
  ngOnInit(): void {}
}
