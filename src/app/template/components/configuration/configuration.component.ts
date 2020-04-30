import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  /** Emit notification to close the nabvar menu*/
  @Output() closeNavBarMenu: EventEmitter<any> = new EventEmitter();
  public languages = ['es_ES', 'ca_ES', 'en_EN'];

  constructor(private translate: TranslateService) {}

  ngOnInit() {}

  /**
   * Change the language to display in the application, and close the navbar menu
   * @param language string one element of this.languages
   */
  public setLanguage(language: string) {
    this.translate.use(language);
    this.closeNavBarMenu.emit({});
  }
}
