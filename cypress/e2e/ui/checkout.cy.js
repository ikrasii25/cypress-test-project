import loginPage from "../../pages/loginPage"
import inventoryPage from "../../pages/inventoryPage"
import cartPage from "../../pages/cartPage"

describe("Checkout Flow", () => {

  beforeEach(() => {

    cy.fixture("user").then((user) => {

      loginPage.visit()

      loginPage.enterUsername(user.username)
      loginPage.enterPassword(user.password)
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