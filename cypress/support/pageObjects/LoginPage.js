// cypress/pageObjects/LoginPage.js

class LoginPage {
  visit() {
    cy.visit("/");
  }

  clickLoginLink() {
    cy.get('a[href="/login"]').click();
  }

  enterCredentials(email, password) {
    cy.get('form[action="/login"] input[placeholder="Email Address"]').type(email);
    cy.get('form[action="/login"] input[placeholder="Password"]').type(password);
  }

  clickLoginButton() {
    cy.get('button[data-qa="login-button"]').click();
  }

  verifyLoggedIn() {
    cy.contains("Logged in as").should("be.visible");
  }
}

module.exports = LoginPage;
