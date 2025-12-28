// src/tests/home.spec.ts
import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage'; // Import the Page Object

test('has title and can navigate to the installation page', async ({ page }) => {
  const homePage = new HomePage(page); // Initialize the Page Object

  await homePage.goto(); // Use the POM method
  await homePage.assertPageTitle('Playwright');

  await homePage.clickGetStarted();
  await homePage.page.waitForURL('**/docs/intro'); // Wait for navigation

  // You can assert against elements from the page object or directly
  await homePage.page.getByRole('heading', { name: 'Installation' }).isVisible();
});