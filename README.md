# Cypress BDD Additions

This project was extended to support Cucumber-style BDD with `.feature` files.

## Available scripts

- npm run test:bdd — Run all `.feature` specs in headless mode
- npm run open:bdd — Open Cypress and show `.feature` specs in the UI

## Notes

- Feature files are under `cypress/e2e/features/`
- Step definitions are under `cypress/e2e/features/**/step_definitions/`
- The project uses `cypress-cucumber-preprocessor` (legacy) — the preprocessor was added to `cypress.config.js`. If you have issues running features, you may need to adjust the preprocessor configuration or try a newer preprocessor (e.g., @badeball/cypress-cucumber-preprocessor) depending on your environment.
