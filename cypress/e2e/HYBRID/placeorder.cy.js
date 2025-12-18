import CartPage from "../../support/pageObjects/CartPage";
import HomePage from "../../support/pageObjects/HomePage";
import PaymentPage from "../../support/pageObjects/PaymentPage";
import ProductsPage from "../../support/pageObjects/ProductsPage";
import '../../support/hooks/uiHooks'


describe("Place Order Flow", () => {
  const home = new HomePage();
  const products = new ProductsPage();
  const cart = new CartPage();
  const payment = new PaymentPage();

  it("should place order successfully", () => {
    home.visit();
    home.goToProducts();

    products.verifyOnProductsPage();
    products.addProductsFromFixture("productsData");
    products.goToCartFromModal();

    cart.verifyProductsPresent();
    cart.proceedToCheckout();
    cart.verifyTotalAmount();

    payment.placeOrder();
    payment.enterCardDetails({
      name: "Test user",
      number: "5123450000000011",
      cvc: "311",
      month: "01",
      year: "2039",
    });
    payment.pay();
    payment.verifyOrderPlaced();
  });
});
