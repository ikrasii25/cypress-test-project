import loginPage from "../../pages/loginPage"
import inventoryPage from "../../pages/inventoryPage"
import cartPage from "../../pages/cartPage"

describe("Cart Tests", () => {

  beforeEach(() => {

    cy.fixture("users").then((user) => {

      loginPage.visit()

      loginPage.enterUsername(user[0].username)
      loginPage.enterPassword(user[0].password)
      loginPage.clickLogin()

    })

  })

  it("should add product to cart", () => {

    inventoryPage.addBackpackToCart()

    inventoryPage.openCart()

    cartPage.cartItems().should("have.length", 1)

  })

})