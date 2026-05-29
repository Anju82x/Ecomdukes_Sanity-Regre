import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';
import { ProductPage } from '../pages/productPage';
import { CartPage } from '../pages/cartpage';

test('Sanity - Login + Search + Add to Cart', async ({ page }) => {

  const home = new HomePage(page);
  const login = new LoginPage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);

  await page.goto('https://ecomdukes.in/login');

  
  await login.login('karthickrajaone@gmail.com', 'Qwerty@02');

  
  await home.searchProduct('mousepad');

  
  await product.selectFirstProduct();
  await product.addToCart();


});