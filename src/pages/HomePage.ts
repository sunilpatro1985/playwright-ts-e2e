// src/pages/HomePage.ts
import { Page, Locator, expect } from '@playwright/test';

// pages/HomePass.ts
import { BasePage } from './BasePage';

export class HomePage extends BasePage {

  //readonly page: Page;
  readonly inventoryItems: Locator;
  readonly headerTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.inventoryItems = page.locator('.inventory_item');
    this.headerTitle = page.locator('.title');
  }

  async getInventoryCount() {
    return await this.inventoryItems.count();
  }
}

/*
export class HomePage {
  readonly page: Page;
  readonly getStartedLink: Locator;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    // Define locators for elements on the page
    this.getStartedLink = page.getByRole('link', { name: 'Get started' });
    this.heading = page.getByRole('heading', { name: 'Installation' });
  }

  // Define actions/methods for the page
  async goto() {
    await this.page.goto('/');
  }

  async clickGetStarted() {
    await this.getStartedLink.click();
  }
  
  // Define assertions/checks for the page
  async assertPageTitle(expectedTitle: string) {
    await expect(this.page).toHaveTitle(expectedTitle);
  }
}
  */