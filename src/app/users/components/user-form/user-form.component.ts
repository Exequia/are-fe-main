import { Component, OnInit, Input, Output } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { EventEmitter } from "events";
import { User } from "../../models/Users";
// import { MustMatch } from './MustMatchValidator';

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"]
})
export class UserFormComponent implements OnInit {
  @Input() userData: User;
  @Output() emitUser = new EventEmitter();
  // private userForm: FormGroup;
  // private personForm: FormGroup;
  // private contactForm: FormGroup;
  public minLength = 4;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userData = {
      alias: "",
      password: "",
      person: {
        birthDate: undefined,
        dni: "",
        firstSurname: "",
        gender: 0,
        name: "",
        secondSurname: ""
      },
      contact: {
        email: "",
        confirmEmail: "",
        phone: ""
      }
    };
    // this.initUserForm();
  }

  // initUserForm() {
  //   this.initPersonForm();
  //   this.initContactForm();
  //   this.userForm = this.fb.group(
  //     {
  //       alias: new FormControl(this.userData.alias, [
  //         Validators.required,
  //         Validators.minLength(this.minLength)
  //       ]),
  //       password: new FormControl(this.userData.password, [
  //         Validators.required,
  //         Validators.minLength(this.minLength)
  //       ]),
  //       confirmPassword: new FormControl('', [
  //         Validators.required,
  //         Validators.minLength(this.minLength)
  //       ]),
  //       person: this.fb.group(this.personForm),
  //       contact: this.fb.group(this.contactForm)
  //     },
  //     {
  //       validator: MustMatch('password', 'confirmPassword')
  //     }
  //   );
  // }

  // get alias() {
  //   return this.userForm.get('alias');
  // }
  // get password() {
  //   return this.userForm.get('password');
  // }
  // get confirmPassword() {
  //   return this.userForm.get('confirmPassword');
  // }

  // initPersonForm() {
  //   this.personForm = new FormGroup({
  //     name: new FormControl(this.userData.person.name, [Validators.required])
  //   });
  // }

  // initContactForm() {
  //   this.contactForm = new FormGroup({
  //     email: new FormControl(this.userData.contact.email, [
  //       Validators.required,
  //       Validators.email
  //     ]),
  //     phone: new FormControl(this.userData.contact.phone)
  //   });
  // }

  // checkPasswords(group: FormGroup) {
  //   // here we have the 'passwords' group
  //   const pass = group.get('password').value;
  //   const confirmPass = group.get('confirmPass').value;

  //   return pass === confirmPass ? null : { notSame: true };
  // }

  // onSubmit(formData) {
  //   console.warn('Your userForm has been submitted', formData);
  // }

  onSubmit() {
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.userData));
  }
}
