import FixtureBuilder from '../fixture-builder';
import { withFixtures, WINDOW_TITLES } from '../helpers';
import { openTestSnapClickButtonAndInstall } from '../page-objects/flows/install-test-snap.flow';
import { loginWithoutBalanceValidation } from '../page-objects/flows/login.flow';
import HeaderNavbar from '../page-objects/pages/header-navbar';
import { TestSnaps } from '../page-objects/pages/test-snaps';
import type { Driver } from '../webdriver/driver';

describe('Test Snap Client Status', function () {
  it('can properly show client status locked state', async function () {
    await withFixtures(
      {
        fixtures: new FixtureBuilder().build(),
        title: this.test?.fullTitle(),
      },
      async ({ driver }: { driver: Driver }) => {
        await loginWithoutBalanceValidation(driver);

        const testSnaps = new TestSnaps(driver);
        const headerNavbar = new HeaderNavbar(driver);

        // Navigate to test snaps page and connect to client status snap and submit client status
        await openTestSnapClickButtonAndInstall(
          driver,
          'connectClientStatusButton',
          false,
        );
        await testSnaps.scrollAndClickButton('submitClientStatusButton');

        // Validate the client status is false when the wallet is unlocked
        await testSnaps.check_clientStatus('false');

        // Switch to the extension MetaMask and lock it
        await driver.switchToWindowWithTitle(
          WINDOW_TITLES.ExtensionInFullScreenView,
        );
        await headerNavbar.check_pageIsLoaded();
        await headerNavbar.lockMetaMask();

        // Click submit client status on test snap page
        await driver.switchToWindowWithTitle(WINDOW_TITLES.TestSnaps);
        await testSnaps.check_pageIsLoaded();
        await testSnaps.scrollAndClickButton('submitClientStatusButton');

        // Validate the client status is true when the wallet is locked
        await testSnaps.check_clientStatus('true');
      },
    );
  });
});
