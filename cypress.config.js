const { defineConfig } = require("cypress");
import fs from "fs";
import path from "path";
module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      // implement node event listeners here
      on("task", {
        writeFixture({ fileName, data }) {
          const fixturesDir = path.resolve("cypress/fixtures");
          if (!fs.existsSync(fixturesDir)) {
            fs.mkdirSync(fixturesDir, { recursive: true });
          }
          const filePath = path.join(fixturesDir, fileName);
          fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
          return null;
        },
        deleteFakeData() {
          const filePath = path.join(
            __dirname,
            "cypress",
            "fixtures",
            "fakeUser.json"
          );
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
          }
          return null;
        },
      });
    },
    env:{
      apiBaseUrl:"https://automationexercise.com"
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    baseUrl: "https://www.automationexercise.com/",
  },
});
