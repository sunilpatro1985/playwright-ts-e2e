import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

test.describe('Sauce Demo Tests', () => {
  let loginPage: LoginPage;
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    await loginPage.navigate();
  });

  test('Successful login with valid credentials', async () => {
    await loginPage.login(process.env.USER_NAME!, process.env.PASSWORD!);
    await expect(homePage.headerTitle).toHaveText('Products');
  });

  test('Validate item count on homepage', async () => {
    await loginPage.login(process.env.USER_NAME!, process.env.PASSWORD!);
    
    const count = await homePage.getInventoryCount();
    // Swag Labs usually has 6 items by default
    expect(count).toBe(6);
  });
});