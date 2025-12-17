const { defineConfig } = require("cypress");
import fs from 'fs';
import path from 'path'

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
        on('task', {
        writeFixture({ fileName, data }) {
          const fixturesDir = path.resolve('cypress/fixtures');
          if (!fs.existsSync(fixturesDir)) {
            fs.mkdirSync(fixturesDir, { recursive: true });
          }
          const filePath = path.join(fixturesDir, fileName);
          fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
          return null;
        }
      });
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    baseUrl: "https://www.automationexercise.com/",
  },
});
