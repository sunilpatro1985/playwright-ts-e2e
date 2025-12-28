// pages/BasePage.ts
import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Common action: Wait for the network to be idle
  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  // Common action: Get the page title
  async getPageTitle() {
    return await this.page.title();
  }

  // Common action: Take a full page screenshot for debugging
  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
  }
}