import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartIcon: Locator;
  readonly checkoutBtn: Locator;
  readonly customBtn: Locator;
  readonly uploadBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartIcon = page.getByAltText('Cart Icon');
    this.checkoutBtn = page.getByText('Proceed to checkout');
    this.customBtn =page.getByTestId('ExpandMoreIcon');
    this.uploadBtn = page.getByText('Upload Files');
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async clickCustom()
  {
    await this.customBtn.click();
  }

  async uploadFile()
  {
    const fileChooserPromise = this.page.waitForEvent('filechooser');

    await this.uploadBtn.click();

    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('tests/pic/rose.jpg');
  
  }

  async clickCheckout() {
    await this.checkoutBtn.click();
  }
}