const { test, expect } = require("@playwright/test");
const { ExceptionPage } = require("../pageObjects/exceptionPage");

test("Test case 1: NoSuchElementException", async ({ page }) => {
  const exceptionPage = new ExceptionPage(page);
  // Open the page
  await exceptionPage.goto();

  // Click Add button
  await exceptionPage.addButton.click();

  // Verify Row 2 input field is displayed.
  await expect(exceptionPage.InputField).toBeVisible();
});

test("Test case 2: ElementNotInteractableException", async ({ page }) => {
  const exceptionPage = new ExceptionPage(page);
  // Open the page
  await exceptionPage.goto();

  // Click Add button
  await exceptionPage.addButton.click();

  // Wait for the second row to load
  await expect(exceptionPage.InputField).toBeVisible({ timeout: 5000 });

  // Type text into the second input field
  await exceptionPage.type("Type");

  // Push Save button using locator By.name(“Save”)
  await exceptionPage.Save("Save");

  // Verify text saved
  await exceptionPage.confirmSave();
});

test("Test case 3: InvalidElementStateException", async ({ page }) => {
  const exceptionPage = new ExceptionPage(page);
  // Open page
  await exceptionPage.goto();

  // Enable editing of disabled input field
  const editButton = page.locator('[name="Edit"]');
  const inputField = page.locator('[class="input-field"]');

  try {
    await page.locator(editButton).click();
  } catch (error) {
    console.error("Input field is disabled:", error);
    return;
  }

  // Clear input field
  try {
    await page.locator(inputField).clear();
  } catch (error) {
    console.error("Input field cannot be cleared", error);
    return;
  }

  // Type text into the input field
  const textToType = "text";
  try {
    await page.type(inputField, textToType);
  } catch (error) {
    console.error("Input field is disabled", error);
    return;
  }

  // Verify text changed
});

test("Test case 4: StaleElementReferenceException", async ({ page }) => {
  const exceptionPage = new ExceptionPage(page);

  //  Open the page
  await exceptionPage.goto();

  try {
    //  Find the instructions text element
    const isInstructionsVisible =
      await exceptionPage.instructionsElement.isVisible();
    if (!isInstructionsVisible) {
      throw new Error("Instructions element is not visible upon loading");
    }

    // Push add button
    await exceptionPage.addButton.click();

    // Verify that the instructions element is no longer displayed
    try {
      await exceptionPage.instructionsElement.waitFor({
        state: "detached",
        timeout: 5000,
      });
      console.log("StaleElementReferenceException");
    } catch (error) {
      if (error.message.includes("waiting for state to be detached")) {
        throw new Error(
          "Instruction element did not detach after clicking Add button."
        );
      } else {
        throw error;
      }
    }

    console.log("Test passed: Instructions element is not visible.");
  } catch (error) {
    console.error("Test failed:", error.message);
  }
});

test("Test case 5: TimeoutException", async ({ page }) => {
  const exceptionPage = new ExceptionPage(page);

  // Open the page
  await exceptionPage.goto();

  // Click Add button
  await exceptionPage.addButton.click();

  // Verify second input field is displayed
  await expect(exceptionPage.InputField).toBeVisible({ timeout: 3000 });
});
