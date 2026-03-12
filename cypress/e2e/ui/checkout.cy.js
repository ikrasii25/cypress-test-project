import loginPage from "../../pages/loginPage"
import inventoryPage from "../../pages/inventoryPage"
import cartPage from "../../pages/cartPage"

describe("Checkout Flow", () => {

  beforeEach(() => {

    cy.fixture("users").then((user) => {

      loginPage.visit()

      loginPage.enterUsername(user[0].username)
      loginPage.enterPassword(user[0].password)
      loginPage.clickLogin()

    })

  })

  it("should start checkout", () => {

    inventoryPage.addBackpackToCart()

    inventoryPage.openCart()

    cartPage.checkout()

    cy.url().should("include", "checkout-step-one")

  })

})