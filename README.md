# Cypress Test Framework — Professional Automation Suite ✅

**Purpose**

This repository contains an automated test framework built with **Cypress**. It is structured to support end-to-end UI tests, API tests, and hybrid flows. The goal is to provide a clean, maintainable test suite that demonstrates strong automation engineering practices and is easy for interviewers and recruiters to evaluate.

---

## Table of Contents

- [Project Overview](#project-overview)
- [What's included](#whats-included)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available npm scripts](#available-npm-scripts)
- [Testing Conventions & Guidelines](#testing-conventions--guidelines)
- [Reporting & Test Artifacts](#reporting--test-artifacts)
- [CI / Docker / Jenkins](#ci--docker--jenkins)
- [Troubleshooting](#troubleshooting)

---

## Project Overview 🔍

This repository demonstrates a practical Cypress test framework used to validate both front-end and API endpoints. It focuses on:

- Clear test organization and readable test cases
- Reusable page objects and helper utilities
- Robust reporting and CI integration
- Realistic fixture-based test data

This is suited as an interview portfolio project or a starting point for production-quality test automation.

---

## What's included ✨

- E2E UI tests and API tests (separated under `cypress/e2e/`)
- Page object pattern for maintainable selectors and flows (`cypress/support/pageObjects/`)
- Custom commands and hooks to DRY tests (`cypress/support/commands.js`, `cypress/support/hooks/`)
- Test helpers for API interactions (`cypress/support/helpers/apiHelpers/`)
- Fake/test data generator utilities (`cypress/utils/fakeData.js`)
- Test reports in JUnit and Mochawesome formats (`results/`)

---

## Tech Stack 🧰

- Node.js + npm
- Cypress (test runner)
- Mocha (test framework baked into Cypress)
- Mochawesome (HTML reporting)
- JUnit XML (CI integration)
- Docker (containerized runs)
- Jenkins (CI job examples - `JenkinsFile`)

---

## Project Structure 📁

Root files:

- `cypress.config.js` — Cypress configuration
- `package.json` — scripts and dependencies
- `JenkinsFile` — declarative pipeline for CI
- `DockerFile` — to run tests in a container
- `reporter-config.json` — reporting options

Main folders:

cypress/

- e2e/
  - API/ — API-focused tests (e.g., `CRUD_user.cy.js`)
  - HYBRID/ — tests that combine UI + API (`placeorder.cy.js`)
  - fixtures/ — static JSON fixtures (e.g., `loginData.json`)
  - screenshots/ — Cypress screenshots on failure
- support/
  - commands.js — custom Cypress commands
  - e2e.js — support/bootstrapping for tests
  - helpers/ — helper modules (e.g., `userAPI.js`)
  - hooks/ — reusable hooks for setup/teardown
  - pageObjects/ — Page object classes for UI components

results/

- cypress-mochawesome-reporter/ — generated HTML reports
- junit/ — generated JUnit XML files for CI

utils/

- `fakeData.js` — test data generation helpers

(See repository for full tree)

---

## Getting Started — Local Setup 🛠️

Prerequisites:

- Node.js 16+ and npm
- Recommended: Docker for containerized runs

Install dependencies:

```bash
npm ci
```

Open Cypress UI (interactive):

```bash
npm run open
```

Run all tests headlessly:

```bash
npm test
# or
npm run test:headless
```

Run a single spec file:

```bash
npx cypress run --spec "cypress/e2e/HYBRID/placeorder.cy.js"
```

---

## Available npm scripts 🚀

- `npm run open` — Open Cypress Test Runner UI
- `npm test` / `npm run test:headless` — Run all tests in headless mode
- `npm run test:api` — Run only API tests (if configured)
- `npm run lint` — Lint code (if linter configured)
- `npm run report:html` — Generate/serve Mochawesome report

(Inspect `package.json` for exact script definitions.)

---

## Testing Conventions & Guidelines 📘

- Tests live in `cypress/e2e/` and are grouped by domain (API, HYBRID, etc.).
- Use Page Objects (under `cypress/support/pageObjects/`) for selectors and reusable UI actions.
- Keep fixtures small and deterministic; prefer programmatic fake data for flexible test cases.
- Tests should be idempotent: they must not rely on global state left by previous runs.
- Use test tags or spec globbing to run subsets in CI.

Example: a simple test skeleton

```js
describe("Checkout flow", () => {
  before(() => cy.loginAs("standardUser"));
  it("adds product and places order", () => {
    // use Page Objects and assertions
  });
});
```
---

## Reporting & Test Artifacts 📊

- HTML reports are produced by Mochawesome and saved to `results/cypress-mochawesome-reporter/`.
- JUnit XML files are saved under `results/junit/` for CI ingestion.
- Screenshots and videos (on failure) are saved to `cypress/screenshots/` and `cypress/videos/` (configurable).

> Tip: CI jobs should publish the `results/` folder as build artifacts so failures are easy to inspect.

---

## CI / Docker / Jenkins ⚙️

- `JenkinsFile` contains a reference pipeline to install dependencies, run tests, and archive results.
- `DockerFile` can be used to run a repeatable containerized test job (useful for scaling and reproducible CI runs).
- Ensure the CI agent has the required browsers and dependencies or use Docker for consistent environments.

---

## Troubleshooting & Tips ⚠️

- If tests are flaky, enable Cypress retries and add explicit wait guards where necessary.
- For network-dependent API tests, consider using mock servers or contract tests.
- Check `results/junit/*.xml` and `results/cypress-mochawesome-reporter/index.html` for test failure details.

---
**Quick evaluation checklist:**

- Clear separation of test types (UI, API, Hybrid) ✅
- Page Object pattern and helper utilities ✅
- CI-ready reports (Mochawesome & JUnit) ✅
- Docker/Jenkins integration examples ✅

---
