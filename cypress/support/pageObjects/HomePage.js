class HomePage {
  visit() {
    cy.visit("/");
  }

  goToProducts() {
    cy.get('a[href="/products"]').click();
  }
}

export default HomePage;
