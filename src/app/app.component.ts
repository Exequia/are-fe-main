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
    this.notify();
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }

  /**
   * Let's check if the browser supports notifications.
   * Let's check whether notification permissions have already been granted
   * If it's okay let's create a notification, Otherwise, we need to ask the user for permission
   */
  private notify() {
    if (!('Notification' in window)) {
      console.warn('This browser does not support desktop notification');
    } else {
      this.translate
        .get('notifications.welcome')
        .subscribe((welcome: string) => {
          let notification;
          if (Notification.permission === 'granted') {
            notification = new Notification(welcome);
          } else if (Notification.permission !== 'denied') {
            Notification.requestPermission((permission) => {
              // If the user accepts, let's create a notification
              if (permission === 'granted') {
                notification = new Notification(welcome);
              }
            });
          }
        });
    }
  }
}
