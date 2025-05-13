import { strict as assert } from 'assert';

import { DAPP_HOST_ADDRESS } from '../../../../constants';
import type { Driver } from '../../../../webdriver/driver';
import Confirmation from './confirmation';

export default class PermitConfirmation extends Confirmation {
  constructor(driver: Driver) {
    super(driver);

    this.driver = driver;
  }

  private readonly originSelector = { text: DAPP_HOST_ADDRESS };

  private readonly contractPetNameSelector = {
    css: '.name__value',
    text: '0xCcCCc...ccccC',
  };

  private readonly primaryTypeSelector = { text: 'Permit' };

  private readonly ownerSelector = { css: '.name__name', text: 'Account 1' };

  private readonly spenderSelector = {
    css: '.name__value',
    text: '0x5B38D...eddC4',
  };

  private readonly valueSelector = { text: '3,000' };

  private readonly nonceSelector = { text: '0' };

  private readonly deadlineSelector = { text: '09 June 3554, 16:53' };

  private readonly nftContractPetNameSelector = {
    css: '.name__value',
    text: '0x581c3...45947',
  };

  private readonly nftTitle = { text: 'Withdrawal request' };

  private readonly nftDescription = {
    text: 'This site wants permission to withdraw your NFTs',
  };

  private readonly nftPrimaryType = { text: 'Permit' };

  private readonly nftSpender = {
    css: '.name__value',
    text: '0x581c3...45947',
  };

  private readonly nftTokenId = { text: '3606393' };

  private readonly nftNonce = { text: '0' };

  private readonly nftDeadline = { text: '23 December 2024, 23:03' };

  async verifyOrigin() {
    const origin = await this.driver.findElement(this.originSelector);
    assert.ok(origin, 'Origin element is missing or incorrect');
  }

  async verifyContractPetName() {
    const contractPetName = await this.driver.findElement(
      this.contractPetNameSelector,
    );
    assert.ok(
      contractPetName,
      'Contract Pet Name element is missing or incorrect',
    );
  }

  async verifyPrimaryType() {
    const primaryType = await this.driver.findElement(this.primaryTypeSelector);
    assert.ok(primaryType, 'Primary Type element is missing or incorrect');
  }

  async verifyOwner() {
    const owner = await this.driver.findElement(this.ownerSelector);
    assert.ok(owner, 'Owner element is missing or incorrect');
  }

  async verifySpender() {
    const spender = await this.driver.findElement(this.spenderSelector);
    assert.ok(spender, 'Spender element is missing or incorrect');
  }

  async verifyValue() {
    const value = await this.driver.findElement(this.valueSelector);
    assert.ok(value, 'Value element is missing or incorrect');
  }

  async verifyNonce() {
    const nonce = await this.driver.findElement(this.nonceSelector);
    assert.ok(nonce, 'Nonce element is missing or incorrect');
  }

  async verifyDeadline() {
    const deadline = await this.driver.findElement(this.deadlineSelector);
    assert.ok(deadline, 'Deadline element is missing or incorrect');
  }

  async verifyNftContractPetName() {
    const nftContractPetName = await this.driver.findElement(
      this.nftContractPetNameSelector,
    );
    assert.ok(
      nftContractPetName,
      'NFT Contract Pet Name element is missing or incorrect',
    );
  }

  async verifyNftTitle() {
    const element = await this.driver.findElement(this.nftTitle);
    assert.ok(element, 'NFT Title element is missing or incorrect');
  }

  async verifyNftDescription() {
    const element = await this.driver.findElement(this.nftDescription);
    assert.ok(element, 'NFT Description element is missing or incorrect');
  }

  async verifyNftPrimaryType() {
    const element = await this.driver.findElement(this.nftPrimaryType);
    assert.ok(element, 'NFT PrimaryType element is missing or incorrect');
  }

  async verifyNftSpender() {
    const element = await this.driver.findElement(this.nftSpender);
    assert.ok(element, 'NFT Spender element is missing or incorrect');
  }

  async verifyNftTokenId() {
    const element = await this.driver.findElement(this.nftTokenId);
    assert.ok(element, 'NFT TokenId element is missing or incorrect');
  }

  async verifyNftNonce() {
    const element = await this.driver.findElement(this.nftNonce);
    assert.ok(element, 'NFT Nonce element is missing or incorrect');
  }

  async verifyNftDeadline() {
    const element = await this.driver.findElement(this.nftDeadline);
    assert.ok(element, 'NFT Deadline element is missing or incorrect');
  }
}
