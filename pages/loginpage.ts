import { Page, Locator } from '@playwright/test';

export class LoginPage {

  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly submitBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('input[type="username"]');
    this.password = page.locator('input[type="password"]');
    this.submitBtn = page.getByRole('button', { name: 'Submit' });
  }

  async gotoLoginPage() {
    await this.page.goto('https://ecomdukes.in/login');
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.submitBtn.click();
  }
}
