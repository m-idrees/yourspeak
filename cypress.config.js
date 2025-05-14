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
      // Implement node event listeners here
    },
    
    video: true,  // Ensure video recording is enabled
    videoUploadOnPasses: false,  // Ensure videos are uploaded even if tests pass
  },
});
