const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Define the reporter to use
  reporter: 'cypress-mochawesome-reporter', 
  reporterOptions: {
    charts: true, // Show statistical charts
    reportPageTitle: 'Mi Reporte', // Custom report title
    embeddedScreenshots: true, // Include screenshots in the HTML report
    inlineAssets: true,  // Embed assets directly into the report file
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); //Embed assets directly into the report file
    },
  },
  chromeWebSecurity: false, // Disable Chrome's web security for cross-origin testing

  video: true, // Save test videos
  screenshotOnRunFailure: true, // Save screenshots of failed tests
  videosFolder: "cypress/videos", // Folder to store test videos
  screenshotsFolder: "cypress/screenshots", // Folder to store screenshots
});
