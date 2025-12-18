class PaymentPage {
  placeOrder() {
    cy.contains("Place Order").click();
  }

  enterCardDetails(card) {
    cy.get('input[data-qa="name-on-card"]').type(card.name);
    cy.get('input[data-qa="card-number"]').type(card.number);
    cy.get('input[data-qa="cvc"]').type(card.cvc);
    cy.get('input[data-qa="expiry-month"]').type(card.month);
    cy.get('input[data-qa="expiry-year"]').type(card.year);
  }

  pay() {
    cy.get('button[data-qa="pay-button"]').click();
  }

  verifyOrderPlaced() {
    cy.get('h2[data-qa="order-placed"] b')
      .invoke("text")
      .should("match", /order placed!/i);
  }
}

export default PaymentPage;
