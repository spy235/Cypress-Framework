export function createUser(userData) {
  return cy.request({
    method: "POST",
    url: "https://automationexercise.com/api/createAccount",
    form: true,
    body: userData,
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.contain("User created!");
    return response;
  });
}