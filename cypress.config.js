const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1366,
    viewportHeight: 720,
    retries: {
      runMode: 2,    // Retries when running via CLI (e.g., CI)
      openMode: 1    // Retries when running via Cypress UI
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
})