const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");

// Mochawesome reporter
const mochawesome = require("cypress-mochawesome-reporter/plugin");

module.exports = defineConfig({
  video: false,
  screenshotOnRunFailure: true,
  retries: {
    runMode: 1,
    openMode: 0
  },
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
  },

  e2e: {
    baseUrl: "https://www.automationexercise.com/",
    specPattern: "cypress/e2e/**/*.js", 
    async setupNodeEvents(on, config) {
      mochawesome(on);

      // 4️⃣ Custom tasks
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

      return config;
    },

    env: {
      apiBaseUrl: "https://automationexercise.com",
    },
  },
});
