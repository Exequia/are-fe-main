import { Injectable } from "@angular/core";

import { NgbDatepickerI18n, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { TranslateService } from "@ngx-translate/core";

const I18N_VALUES = {
  es_ES: {
    weekdays: ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"],
    months: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic"
    ]
  },
  ca_ES: {
    weekdays: ["Dl", "Dm", "Dx", "Dj", "Dv", "Ds", "Di"],
    months: [
      "Gen",
      "Feb",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ]
  }
};

@Injectable({
  providedIn: "root"
})
export class CustomDatepickerI18nService extends NgbDatepickerI18n {
  private arrWeekdays: Array<string>;
  private arrMonths: Array<string>;

  constructor(private translate: TranslateService) {
    super();
    this.translate.get("arrWeekdays").subscribe((res: string[]) => {
      this.arrWeekdays = res;
    });
    this.translate.get("arrMonths").subscribe((res: string[]) => {
      this.arrMonths = res;
    });
  }

  getWeekdayShortName(weekday: number): string {
    let text = "";
    if (I18N_VALUES[this.translate.currentLang]) {
      text = I18N_VALUES[this.translate.currentLang].weekdays[weekday - 1];
    }
    return text;
  }
  getMonthShortName(month: number): string {
    let text = "";
    if (I18N_VALUES[this.translate.currentLang]) {
      text = I18N_VALUES[this.translate.currentLang].months[month - 1];
    }
    return text;
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }
  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}
