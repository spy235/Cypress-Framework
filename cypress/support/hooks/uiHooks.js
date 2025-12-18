beforeEach(() => {
  cy.signUpUsingApi()
  cy.fixture('fakeUser').then((login) => {
    cy.loginSession(login.email, login.password)
  })
})

after(() => {
  cy.task('deleteFakeData')
})
