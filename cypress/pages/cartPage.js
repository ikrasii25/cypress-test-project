class CartPage {

  cartItems() {
    return cy.get(".cart_item")
  }

  checkout() {
    cy.get("#checkout").click()
  }

}

export default new CartPage()