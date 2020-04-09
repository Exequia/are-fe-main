import { Component } from '@angular/core';
import { NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CustomDatepickerI18nService } from '../../services/custom-datepicker-i18n.service';

@Component({
  selector: 'app-datepicker-i18n',
  templateUrl: './datepicker-i18n.component.html',
  styleUrls: ['./datepicker-i18n.component.scss'],
  providers: [{provide: NgbDatepickerI18n, useClass: CustomDatepickerI18nService}]
})
export class DatepickerI18nComponent {
  model: NgbDateStruct;
}
