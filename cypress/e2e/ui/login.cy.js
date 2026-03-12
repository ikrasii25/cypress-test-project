import loginPage from "../../pages/loginPage"

describe("Login Tests", () => {

    beforeEach(() => {
        loginPage.visit()
    })


    it("should login successfully", () => {

        cy.fixture("user").then((user) => {
            loginPage.enterUsername(user.username)
            loginPage.enterPassword(user.password)
            loginPage.clickLogin()

            cy.url().should("include", "inventory")
            cy.get(".inventory_list").should("be.visible")
        })

       
      

    })
})