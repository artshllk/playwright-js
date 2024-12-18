import { expect, Page } from "@playwright/test";
import { Urls } from "../utils/urls";
import { navigation, navigationKeys } from "./home_nav";
export class HomePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async visitHomepage() {
    await this.page.goto(Urls.baseUrl);
    await this.page.waitForLoadState("load");
  }

  async checkNavVisibility() {
    const navigationSection = this.page.locator(".header__main-nav");
    await expect(navigationSection).toBeVisible();

    for (const key of navigationKeys) {
      const navItem = navigation[key];
      const locator = navigationSection.locator(`text=${navItem}`);
      await expect(locator).toBeVisible();
    }
  }
}
