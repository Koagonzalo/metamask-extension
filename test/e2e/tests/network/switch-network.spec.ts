import type { Suite } from 'mocha';

import FixtureBuilder from '../../fixture-builder';
import { withFixtures } from '../../helpers';
import { loginWithBalanceValidation } from '../../page-objects/flows/login.flow';
import {
  switchToNetworkFlow,
  searchAndSwitchToNetworkFlow,
} from '../../page-objects/flows/network.flow';
import HeaderNavbar from '../../page-objects/pages/header-navbar';
import HomePage from '../../page-objects/pages/home/homepage';
import type { Driver } from '../../webdriver/driver';

describe('Switch network - ', function (this: Suite) {
  it('Switch networks to existing and new networks', async function () {
    await withFixtures(
      {
        fixtures: new FixtureBuilder().build(),
        title: this.test?.fullTitle(),
      },
      async ({ driver }: { driver: Driver }) => {
        await loginWithBalanceValidation(driver);
        const homePage = new HomePage(driver);

        // Validate the default network is Localhost 8545
        await new HeaderNavbar(driver).check_currentSelectedNetwork(
          'Localhost 8545',
        );

        // Validate the switch network functionality to Ethereum Mainnet
        await switchToNetworkFlow(driver, 'Ethereum Mainnet');
        await homePage.check_localNodeBalanceIsDisplayed();

        // Validate the switch network functionality to test network
        await switchToNetworkFlow(driver, 'Localhost 8545', true);
        await homePage.check_localNodeBalanceIsDisplayed();

        // Add Arbitrum network and perform the switch network functionality
        await searchAndSwitchToNetworkFlow(driver, 'Arbitrum One');
        await homePage.check_localNodeBalanceIsDisplayed();

        // Validate the switch network functionality back to Ethereum Mainnet
        await switchToNetworkFlow(driver, 'Ethereum Mainnet');
        await homePage.check_localNodeBalanceIsDisplayed();
      },
    );
  });
});
