import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  //  getTitleText() {
  //    return element(
  //      by.css('app-root .content span')
  //    ).getText() as Promise<string>;
  //  }

  getMainText() {
    return element(by.tagName('h1')).getText() as Promise<string>;
  }

  getHomeNavbarText() {
    return element(by.css('nav-link')[0]).getText() as Promise<string>;
  }

  //  async navigateToHome() {
  //    await element(by.css('nav-link')[0]).click();
  //    await browser.sleep(2000);
  //    return browser.getCurrentUrl() as Promise<string>;
  //  }

  navigateToHome() {
    return element(by.css('nav-link')[0]).click() as Promise<void>;
  }
}
