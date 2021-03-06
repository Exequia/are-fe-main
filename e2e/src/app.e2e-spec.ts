import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Main Name Text', () => {
    page.navigateTo();
    expect(page.getMainText()).toEqual('Alberto Real');
  });

  // it('should have navbar items', async () => {
  //   page.navigateTo();
  //   const currentURL: string = await page.navigateToHome();
  //   expect(currentURL).toBeTruthy();
  //   expect(currentURL.indexOf('home') !== -1).toBeTruthy();
  // });

  // it('should have navbar items', async () => {
  //   page.navigateTo();
  //   page.navigateToHome();
  //   browser.sleep(2000).then(() => {
  //     browser.getCurrentUrl().then((actualUrl) => {
  //       expect(actualUrl.indexOf('home') !== -1).toBeTruthy(); // check the current url is list
  //     });
  //   });
  // });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getTitleText()).toEqual('are-fe-main app is running!');
  // });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});
