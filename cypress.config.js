const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://api-desafio-qa.onrender.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
