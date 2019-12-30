import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Contact } from "../../models/Users";

@Component({
  selector: "app-user-contact-form",
  templateUrl: "./user-contact-form.component.html",
  styleUrls: ["./user-contact-form.component.scss"]
})
export class UserContactFormComponent implements OnInit {
  @Input() contact: Contact;
  @Output() emitContactForm = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.contact = this.contact
      ? this.contact
      : {
          email: "",
          phone: "",
          confirmEmail: ""
        };
  }
}
