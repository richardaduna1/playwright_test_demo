const { test } = require("@playwright/test");
const { LoginPage } = require("../pageObjects/loginPage");

test("Test case 1: Positive LogIn test and verify success page", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  // Open page
  await loginPage.goto();

  // Type username student into Username field
  // Type password Password123 into Password field
  await loginPage.inputCredentials("student", "Password123");
  await page.waitForTimeout(1000);

  // Push Submit button
  await loginPage.submit();

  // Optional, add timeout to verify elements in headed.
  await page.waitForTimeout(2000);

  // Verify new page URL contains practicetestautomation.com/logged-in-successfully/
  await loginPage.verifyLogIn();

  // Verify new page contains expected text ('Congratulations' or 'successfully logged in')
  await loginPage.verifySuccessMessage();

  // Verify button Log out is displayed on the new page
  await loginPage.verifyLogOutButton();
});

test("Test case 2: Negative username test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  // Open the page
  await loginPage.goto();

  // Type incorrectUser into Username field
  // Type Password123 into Password field
  await loginPage.inputCredentials("incorrectUser ", "Password123");
  await page.waitForTimeout(1000);

  // Push Submit button
  await loginPage.submit();

  // Optional, add timeout to verify elements in headed.
  await page.waitForTimeout(2000);

  // Verify error message is displayed
  await loginPage.verifyErrorMessage();

  // Verify error message text is "Your username is invalid!"
  await loginPage.InvalidUsernameText("username");
});

test("Test case 3: Negative password test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  // Open the page
  await loginPage.goto();

  // Type username student into Username field
  // Type password incorrectPassword into Password field
  await loginPage.inputCredentials("student", "incorrectPassword");
  await page.waitForTimeout(1000);

  // Push the Submit button
  await loginPage.submit();

  // Optional, add timeout to see elements in headed mode.
  await page.waitForTimeout(2000);

  // Verify error message is displayed
  await loginPage.verifyErrorMessage();

  // Verify error message text is "Your password is invalid!"
  await loginPage.InvalidPasswordText("password");
});
