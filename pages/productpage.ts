import { Page, Locator } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly firstProduct: Locator;
  readonly addToCartBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstProduct = page.locator('img[alt="Chaladiyil Customized Mousepad — Premium print, anti-slip, and desk-friendly (white)"]').first();
    this.addToCartBtn = page.locator('text=Add to Cart');
  }

  async selectFirstProduct() {
    await this.firstProduct.click();
  }

  async addToCart() {
    await this.addToCartBtn.click();
  }
}