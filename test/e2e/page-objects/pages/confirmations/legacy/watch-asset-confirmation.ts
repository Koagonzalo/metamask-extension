import type { Driver } from '../../../../webdriver/driver';
import type { RawLocator } from '../../../common';

class WatchAssetConfirmation {
  private readonly driver: Driver;

  private readonly footerConfirmButton: RawLocator;

  constructor(driver: Driver) {
    this.driver = driver;

    this.footerConfirmButton = '[data-testid="page-container-footer-next"]';
  }

  async clickFooterConfirmButton() {
    await this.driver.clickElement(this.footerConfirmButton);
  }
}

export default WatchAssetConfirmation;
