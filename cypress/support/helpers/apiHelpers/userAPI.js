      const API_BASE = Cypress.env("apiBaseUrl")

export function createUser(userData) {

  return cy.request({
    method: "POST",
    url: `${API_BASE}/api/createAccount`,
    form: true,
    body: userData,
  }).then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body).to.contain("User created!")
    return response
  })
}

export function loginUser(userData) {
  return cy.request({
    method: "POST",
    url: `${API_BASE}/api/verifyLogin`,
    form: true,
    body: {
      email: userData.email,
      password: userData.password
    },
  }).then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body).to.contain("User exists!")
    return response
  })
}

export function deleteUser(userData) {
  return cy.request({
    method: "DELETE",
    url: `${API_BASE}/api/deleteAccount`,
    form: true,
    body: {
      email: userData.email,
      password: userData.password
    }
  }).then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body).to.contain("Account deleted!")
    return response
  })
}
