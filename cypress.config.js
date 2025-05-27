const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1440,
    viewportHeight: 1080,
    retries: {
      runMode: 2,   
      openMode: 2   
    },
    
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    
    video: true,  // Ensure video recording is enabled
    videoUploadOnPasses: false,  // Ensure videos are uploaded even if tests pass
  },
});
