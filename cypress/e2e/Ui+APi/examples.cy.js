/// <reference types="cypress" />

describe("Automation Pratice HRM", function () {
  beforeEach(function () {
    cy.signUpUsingApi()
    cy.fixture("fakeUser").then((login) => {
      cy.loginSession(login.email, login.password);
    });
  });

  it("Login Test", function () {
    cy.visit("/");
    cy.get('a[href="/products"]').click();
    cy.url().should("include", "/products");

    cy.fixture("productsData").then((data) => {
      cy.get(".productinfo").each(($el) => {
        cy.wrap($el)
          .invoke("text")
          .then((text) => {
            // check if this product is in the fixture array
            const match = data.products.find((product) =>
              text.includes(product)
            );
            if (match) {
              cy.wrap($el).find(".add-to-cart").click();
            }
          });
      });
      cy.get(".modal-content")
        .should("be.visible")
        .find('a[href="/view_cart"]')
        .click();
      cy.get("tbody tr").each(($row) => {
        const productName = $row.find("h4 a").text().trim();
        cy.wrap($row).should("contain.text", productName);
      });
    });
    cy.contains("Proceed To Checkout").click();

    cy.get("table tbody tr .cart_total").then(($prices) => {
      const sum = $prices.toArray().reduce((acc, el) => {
        return acc + parseInt(el.innerText.split(".")[1]);
      }, 0);
      cy.log(sum);
      cy.xpath("//b[contains(text(),'Total Amount')]")
        .closest("tr")
        .find("p.cart_total_price")
        .then(($total) => {
          const totalPrice = parseInt($total.text().split(".")[1]);
          expect(sum).to.equal(totalPrice);
        });
    });
    cy.contains("Place Order").click();
    cy.get('input[data-qa="name-on-card"]').type("Test  user");
    cy.get('input[data-qa="card-number"]').type("5123450000000011");
    cy.get('input[data-qa="cvc"]').type("311");
    cy.get('input[data-qa="expiry-month"]').type("01");
    cy.get('input[data-qa="expiry-year"]').type("2039");
    cy.get('button[data-qa="pay-button"]').click();

    cy.get('h2[data-qa="order-placed"] b')
      .invoke("text")
      .should("match", /order placed!/i); // ignorese case

    // or  much cleaner
    // cy.fixture("productsData").then((products) => {
    //   products.forEach((product) => {
    //     cy.contains(".productinfo", product)
    //       .find(".add-to-cart")
    //       .click();
    //   });
    // });
  });
});
