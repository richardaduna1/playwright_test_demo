const { expect } = require("@playwright/test");

exports.ExceptionPage = class ExceptionPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.addButton = page.locator('[id="add_btn"]');
    this.InputField = page.locator('[class="input-field"]');
    this.editButton = page.locator('[name="Edit"]');
    this.saveButton = page.locator('[name="Save"]');
    this.confirmMessage = page.locator('[id="confirmation"]');
    this.instructionsElement = page.locator('[id="instructions"]');
  }

  async goto() {
    await this.page.goto(
      "https://practicetestautomation.com/practice-test-exceptions/"
    );
  }

  async type(text) {
    await this.page.getByRole("textbox").nth(1).fill(text);
  }

  async Save(text) {
    await this.page.locator('[name="Save"] >> visible=true').click();
  }

  async confirmSave() {
    await expect(this.confirmMessage).toBeVisible();
    await expect(this.confirmMessage).toHaveText("Row 2 was saved ");
  }
};
