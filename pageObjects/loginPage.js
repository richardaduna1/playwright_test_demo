const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.username = page.locator('input[name="username"]');
    this.password = page.locator('input[name="password"]');
    this.submitButton = page.getByRole("button", { name: "submit" });
    this.successMessage = page.getByRole(
      'heading[name="Logged In Successfully"]'
    );
    this.logOutButton = page.getByRole('link[name="Log out"]');
    this.errorMessage = page.locator("id=error");
  }

  async goto() {
    await this.page.goto(
      "https://practicetestautomation.com/practice-test-login/"
    );
  }

  async submit() {
    await this.submitButton.click();
  }

  async inputCredentials(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
  }

  async verifyLogIn() {
    await expect(this.page).toHaveURL(
      "https://practicetestautomation.com/logged-in-successfully/"
    );
  }

  async verifySuccessMessage() {
    await expect(this.successMessage).toBeVisible();
  }

  async verifyLogOutButton() {
    await expect(this.logOutButton).toBeVisible();
  }

  async verifyErrorMessage() {
    await expect(this.errorMessage).toBeVisible();
  }

  async InvalidUsernameText() {
    await expect(this.errorMessage).toHaveText("Your username is invalid!");
  }

  async InvalidPasswordText() {
    await expect(this.errorMessage).toHaveText("Your password is invalid!");
  }
};
