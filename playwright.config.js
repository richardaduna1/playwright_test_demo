const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./test", // Update with your test directory
  reporter: [["html", { outputFolder: "playwright-report" }]],
});
