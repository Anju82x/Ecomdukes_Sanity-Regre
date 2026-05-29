import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';
import { ProductPage } from '../pages/productPage';
import { CartPage } from '../pages/cartpage';

test('Regression - End to End Flow', async ({ page }) => {

  const home = new HomePage(page);
  const login = new LoginPage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page); 

  await page.goto('https://ecomdukes.in/login');

  // Login
  await login.login('karthickrajaone@gmail.com', 'Qwerty@02');

  // Search product
  await home.searchProduct('mousepad');

  // Product selection
  await product.selectFirstProduct();
  await product.addToCart();

  // Cart
  await cart.openCart();

  //custom
  await cart.clickCustom();

  //upload
  await cart.uploadFile();

  // Checkout
  await cart.clickCheckout();

  // Validation
  await expect(page).toHaveURL(/checkout/, { timeout: 20000 });

});