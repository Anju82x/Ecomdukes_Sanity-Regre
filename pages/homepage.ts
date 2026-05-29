import { Page, Locator } from '@playwright/test';

export class HomePage {

  readonly page: Page;
  readonly searchBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.locator('input[placeholder="Search for products, brands"]');
  }

  async gotoLoginPage() {
    await this.page.goto('https://ecomdukes.in/home');
  }

  async searchProduct(product: string) {
    await this.searchBox.fill(product);
    await this.searchBox.press('Enter');

  }
}
