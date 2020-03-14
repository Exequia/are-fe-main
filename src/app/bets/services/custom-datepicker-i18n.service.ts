import { Injectable } from '@angular/core';

import {NgbDatepickerI18n, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

const I18N_VALUES = {
  es_ES: {
    weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
    months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc'],
  }
  // other languages you would support
};

@Injectable({
  providedIn: 'root'
})
export class CustomDatepickerI18nService extends NgbDatepickerI18n {

  arrWeekdays: Array<string>;
  arrMonths: Array<string>;

  constructor(private translate: TranslateService) {
    super();
    this.translate.get('arrWeekdays').subscribe((res: string[]) => {
      this.arrWeekdays = res;
      console.log('arrWeekdays', this.arrWeekdays);
    });
    this.translate.get('arrMonths').subscribe((res: string[]) => {
      this.arrMonths = res;
      console.log('arrMonths', this.arrMonths);
    });
  }

  getWeekdayShortName(weekday: number): string {
    return this.arrWeekdays ? this.arrWeekdays[weekday - 1] : '';
    // return I18N_VALUES[this._i18n.language].months[month - 1]
  }
  getMonthShortName(month: number): string {
    return this.arrMonths ? this.arrMonths[month - 1] : '';
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }
  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}
