class ProductsPage {
  verifyOnProductsPage() {
    cy.url().should("include", "/products");
  }

  addProductsFromFixture(fixtureName) {
    cy.fixture(fixtureName).then((data) => {
      cy.get(".productinfo").each(($el) => {
        cy.wrap($el)
          .invoke("text")
          .then((text) => {
            const match = data.products.find((product) =>
              text.includes(product)
            );
            if (match) {
              cy.wrap($el).find(".add-to-cart").click();
            }
          });
      });
    });
  }

  goToCartFromModal() {
    cy.get(".modal-content")
      .should("be.visible")
      .find('a[href="/view_cart"]')
      .click();
  }
}

export default ProductsPage;
