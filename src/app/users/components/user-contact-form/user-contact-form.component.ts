import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-contact-form',
  templateUrl: './user-contact-form.component.html',
  styleUrls: ['./user-contact-form.component.scss']
})
export class UserContactFormComponent implements OnInit {
  @Input() contactForm: FormGroup;
  @Output() emitContactForm = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  get email() {
    return this.contactForm.get('email');
  }
}
