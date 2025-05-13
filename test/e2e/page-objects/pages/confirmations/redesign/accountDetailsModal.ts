import type { Driver } from '../../../../webdriver/driver';
import type { RawLocator } from '../../../common';
import Confirmation from './confirmation';

class AccountDetailsModal extends Confirmation {
  private readonly accountBalanceInfo: RawLocator;

  private readonly addressCopyButton: RawLocator;

  private readonly accountDetailsModalCloseButton: RawLocator;

  constructor(driver: Driver) {
    super(driver);

    this.driver = driver;

    this.accountBalanceInfo =
      '[data-testid="confirmation-account-details-modal__account-balance"]';

    this.addressCopyButton = '[data-testid="address-copy-button-text"]';

    this.accountDetailsModalCloseButton =
      '[data-testid="confirmation-account-details-modal__close-button"]';
  }

  async clickAddressCopyButton() {
    await this.driver.clickElement(this.addressCopyButton);
  }

  async clickAccountDetailsModalCloseButton() {
    await this.driver.clickElement(this.accountDetailsModalCloseButton);
  }

  async assertHeaderInfoBalance(balance: string) {
    await this.driver.waitForSelector({
      css: this.accountBalanceInfo.toString(),
      text: `${balance} ETH`,
    });
  }
}

export default AccountDetailsModal;
