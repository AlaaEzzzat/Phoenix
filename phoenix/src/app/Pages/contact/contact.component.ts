import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  mail: any = {};
  constructor() {}

  ngOnInit(): void {}
  sendMsg(sender: string, email: string, message: string) {
    this.mail = {
      sender: sender,
      email: email,
      message: message,
    };
    console.log(this.mail);
  }
}
