import { HomePage } from "../home/HomePage";
import { expect, Page } from "@playwright/test";

export class Cart extends HomePage {
  constructor(page: Page) {
    super(page);
  }

  async visitCartPage() {
    await this.visitHomepage();
  }

  async clickShopTheOneButton() {
    const shopTheOneButton = this.page.getByRole("button", {
      name: "Shop The One",
    });
    await expect(shopTheOneButton).toBeVisible();
    await shopTheOneButton.click();
  }

  async titleVisibility() {
    await expect(
      this.page.locator('[data-block-type="title"]')
    ).toBeInViewport();
  }

  async addToCartButton() {
    await this.page.getByRole("button", { name: "Add to cart" }).click();
  }

  async clickCheckout() {
    await this.page.locator('[name="checkout"]').click();
  }

  async checkoutPageVisibility() {
    await expect(this.page.locator("#checkout-main")).toBeVisible();
  }
}
