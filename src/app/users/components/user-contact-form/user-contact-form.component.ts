import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Contact } from "../../models/Users";
interface Contact {
  email: string;
  confirmEmail: string;
  phone: string;
}

@Component({
  selector: 'app-user-contact-form',
  templateUrl: './user-contact-form.component.html',
  styleUrls: ['./user-contact-form.component.scss']
})
export class UserContactFormComponent implements OnInit {
  @Input() contact: Contact;
  @Output() emitContactForm = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.contact = this.contact
      ? this.contact
      : {
          email: '',
          phone: '',
          confirmEmail: ''
        };
  }
}
