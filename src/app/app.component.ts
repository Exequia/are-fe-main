import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from './../environments/environment';
import * as AOS from 'aos';
import { UtilsService } from './services/utils/utils.service';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private utils: UtilsService
  ) {
    this.translate.setDefaultLang(environment.locale);
    this.translate.use(environment.locale);
    AOS.init();
    this.utils.setDevice();
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
