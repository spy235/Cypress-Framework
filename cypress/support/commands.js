// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { generateUserData } = require("../utils/fakeData");
const { createUser } = require("./helpers/apiHelpers/userAPI");
const LoginPage = require("./pageObjects/LoginPage");

Cypress.Commands.add("loginSession", (email, password) => {
  cy.session(
    ["login", email], // cache key
    () => {
      const loginPage = new LoginPage();

      loginPage.visit();
      loginPage.clickLoginLink();
      loginPage.enterCredentials(email, password);
      loginPage.clickLoginButton();
      loginPage.verifyLoggedIn();
    },
    {
      cacheAcrossSpecs: true, // equivalent to Playwright storageState reuse
    }
  );
});

Cypress.Commands.add("signUpUsingApi",()=>{
      // Generate fake user data
     let userData = generateUserData()
      // Save the data to fixture
    cy.task('writeFixture', { fileName: 'fakeUser.json', data: userData });
      // Make API request to create the user
     createUser(userData);
})
