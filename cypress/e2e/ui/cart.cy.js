import loginPage from "../../pages/loginPage"
import inventoryPage from "../../pages/inventoryPage"
import cartPage from "../../pages/cartPage"

describe("Cart Tests", () => {

  beforeEach(() => {

    cy.fixture("user").then((user) => {

      loginPage.visit()

      loginPage.enterUsername(user.username)
      loginPage.enterPassword(user.password)
      loginPage.clickLogin()

    })

  })

  it("should add product to cart", () => {

    inventoryPage.addBackpackToCart()

    inventoryPage.openCart()

    cartPage.cartItems().should("have.length", 1)

  })

})