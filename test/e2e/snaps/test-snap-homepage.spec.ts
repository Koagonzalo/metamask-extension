import type { Suite } from 'mocha';

import FixtureBuilder from '../fixture-builder';
import { withFixtures, WINDOW_TITLES } from '../helpers';
import { openTestSnapClickButtonAndInstall } from '../page-objects/flows/install-test-snap.flow';
import { loginWithoutBalanceValidation } from '../page-objects/flows/login.flow';
import HeaderNavbar from '../page-objects/pages/header-navbar';
import SnapListPage from '../page-objects/pages/snap-list-page';
import type { Driver } from '../webdriver/driver';

describe('Test Snap Homepage', function (this: Suite) {
  it('tests snap home page functionality', async function () {
    await withFixtures(
      {
        fixtures: new FixtureBuilder().build(),
        title: this.test?.fullTitle(),
      },
      async ({ driver }: { driver: Driver }) => {
        await loginWithoutBalanceValidation(driver);

        const headerNavbar = new HeaderNavbar(driver);
        const snapListPage = new SnapListPage(driver);

        await openTestSnapClickButtonAndInstall(
          driver,
          'connectHomePageButton',
          false,
        );

        // switch to metamask page and open the three dots menu
        await driver.switchToWindowWithTitle(
          WINDOW_TITLES.ExtensionInFullScreenView,
        );

        await headerNavbar.openSnapListPage();
        await snapListPage.clickHomePageSnap();

        // check that the home page appears and contains the right info
        await snapListPage.check_homePageTitle();
      },
    );
  });
});
