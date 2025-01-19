# Playwright Test Setup and Guide

This README file provides instructions for setting up and running tests of https://practicetestautomation.com/ using Playwright, a Node.js library for end-to-end testing.

---

## Prerequisite

1. Install VSCode (https://code.visualstudio.com/download)
2. Install Nodejs (https://nodejs.org/en/download)

## Steps to Set Up and Run Playwright Tests

### 1. Create a Test Directory

1. Open your VSCode and open the terminal.
2. Create a new directory for your project:
   ```bash
   mkdir playwright_test_demo
   cd playwright_test_demo
   ```

### 2. Initialize Node.js

1. Run the following command to initialize a Node.js project:
   ```bash
   npm init -y
   ```
   This will generate a `package.json` file in your directory.

### 3. Install Playwright

1. Install Playwright using npm:
   ```bash
   npm install @playwright/test
   ```

### 4. Initialize Playwright

1. Run the following command to initialize Playwright with its configuration and default test directory structure:
   ```bash
   npx playwright install
   ```
2. Playwright will set up necessary files and install browser binaries.

### 5. Run the Test

1. To run the test:
   ```bash
   npx playwright test
   ```
2. This will execute all tests in the `test` directory.

### 7. Run the Test in Headed Mode

1. To see the browser UI during test execution:
   ```bash
   npx playwright test --headed
   ```

### 8. Generate and View a Report

1. To generate a test report:
   ```bash
   npx playwright show-report
   ```
2. This command opens an interactive report in your default browser.

---

## Additional Notes

- Use `npx playwright test --help` to see more options for running tests.
- Refer to the [Playwright Documentation](https://playwright.dev/docs/intro) for advanced configurations and debugging tips.
