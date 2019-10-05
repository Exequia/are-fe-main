import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'are-fe-main';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(environment.locale);
    this.translate.use(environment.locale);
  }
}
