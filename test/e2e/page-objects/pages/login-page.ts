import { WALLET_PASSWORD } from '../../helpers';
import type { Driver } from '../../webdriver/driver';

class LoginPage {
  private readonly driver: Driver;

  private readonly passwordInput: string;

  private readonly unlockButton: string;

  private readonly welcomeBackMessage: object;

  private readonly forgotPasswordButton: object;

  constructor(driver: Driver) {
    this.driver = driver;
    this.passwordInput = '[data-testid="unlock-password"]';
    this.unlockButton = '[data-testid="unlock-submit"]';
    this.welcomeBackMessage = {
      css: '[data-testid="unlock-page-title"]',
      text: 'Welcome back!',
    };
    this.forgotPasswordButton = {
      text: 'Forgot password?',
      tag: 'a',
    };
  }

  async check_pageIsLoaded(): Promise<void> {
    try {
      await this.driver.waitForMultipleSelectors([
        this.welcomeBackMessage,
        this.passwordInput,
        this.unlockButton,
      ]);
    } catch (e) {
      console.log('Timeout while waiting for login page to be loaded', e);
      throw e;
    }
    console.log('Login page is loaded');
  }

  /**
   * This method unlocks the wallet and lands user on the homepage.
   *
   * @param password - The password used to unlock the wallet. Defaults to WALLET_PASSWORD.
   */
  async loginToHomepage(password: string = WALLET_PASSWORD): Promise<void> {
    console.log(`On login page, Login to homepage `);
    await this.driver.fill(this.passwordInput, password);
    await this.driver.clickElement(this.unlockButton);
  }

  async gotoResetPasswordPage(): Promise<void> {
    console.log('Navigating to reset password page');
    await this.driver.clickElement(this.forgotPasswordButton);
  }
}

export default LoginPage;
