const { defineConfig } = require("cypress");



module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.flipkart.com", // Set the base URL for your tests
    specPattern: "cypress/e2e/page_objectsTest/*.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
                  
    },
  },
});
