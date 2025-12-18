class CartPage {
  verifyProductsPresent() {
    cy.get("tbody tr").each(($row) => {
      const productName = $row.find("h4 a").text().trim();
      cy.wrap($row).should("contain.text", productName);
    });
  }

  proceedToCheckout() {
    cy.contains("Proceed To Checkout").click();
  }

  verifyTotalAmount() {
    cy.get("table tbody tr .cart_total").then(($prices) => {
      const sum = $prices.toArray().reduce((acc, el) => {
        return acc + parseInt(el.innerText.split(".")[1]);
      }, 0);

      cy.xpath("//b[contains(text(),'Total Amount')]")
        .closest("tr")
        .find("p.cart_total_price")
        .then(($total) => {
          const totalPrice = parseInt($total.text().split(".")[1]);
          expect(sum).to.equal(totalPrice);
        });
    });
  }
}

export default CartPage;
