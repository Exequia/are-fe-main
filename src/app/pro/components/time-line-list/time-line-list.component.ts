import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-time-line-list',
  templateUrl: './time-line-list.component.html',
  styleUrls: ['./time-line-list.component.scss']
})
export class TimeLineListComponent implements OnInit {
  @Input() items: any[];
  @Input() filterProp: string;
  @Input() targetTemplate: string;
  public filteredItems: any[];
  public locale: string;

  constructor(private _translateService: TranslateService) {}

  ngOnInit() {
    this.filteredItems = this.items;
    this.locale = this._translateService.currentLang;
    // don't forget to unsubscribe!
    this._translateService.onLangChange.subscribe(
      (langChangeEvent: LangChangeEvent) => {
        this.locale = langChangeEvent.lang;
      }
    );
  }

  public doFilteredItems(filterResults: any[]) {
    this.filteredItems = filterResults;
  }

  public getClass(odd: boolean): string {
    return odd ? 'right' : 'left';
  }

  public getAos(odd: boolean): string {
    return odd ? 'fade-left' : 'fade-right';
  }

  public selectSkill(skill: any) {
    this.items.forEach((item) => {
      if (item.skills) {
        item.skills.forEach((_s) => {
          if (_s.id === skill.id) {
            _s.status = 'selected';
          } else {
            _s.status = 'default';
          }
        });
      }
    });
  }

  public getBackgroundColor(skill: any): string {
    return skill.status === 'selected' ? 'badge-success' : 'badge-dark';
  }
}
