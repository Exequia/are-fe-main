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
      console.log("arrWeekdays", this.arrWeekdays);
    });
    this.translate.get("arrMonths").subscribe((res: string[]) => {
      this.arrMonths = res;
      console.log("arrMonths", this.arrMonths);
    });
  }

  getWeekdayShortName(weekday: number): string {
    return I18N_VALUES[this.translate.currentLang].weekdays[weekday - 1];
  }
  getMonthShortName(month: number): string {
    return I18N_VALUES[this.translate.currentLang].months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }
  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}
