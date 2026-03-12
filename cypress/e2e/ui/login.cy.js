import loginPage from "../../pages/loginPage"

describe("Login Tests", () => {

    beforeEach(() => {
        // cy.intercept("**").as("allRequests")
        loginPage.visit()
    })



    it("should login successfully", () => {

        cy.fixture("users").then((user) => {
            loginPage.enterUsername(user[0].username)
            loginPage.enterPassword(user[0].password)
            loginPage.clickLogin()

            // cy.wait("@allRequests")

            cy.url().should("include", "inventory")
            cy.get(".inventory_list").should("be.visible")
        })
    })

    it("updated login test", () => {
        cy.login("standard_user", "secret_sauce")
        cy.url().should("include", "inventory")
    })
    
    it("login with multiple users", () => {
        cy.fixture("users").then((users) => {
            users.forEach((user) => {
                loginPage.enterUsername(user.username)
                loginPage.enterPassword(user.password)
                loginPage.clickLogin()

                

                cy.document().then((doc) => {
                    const errorExists = !!doc.querySelector("h3[data-test='error']")

                    if (errorExists) {
                        cy.log(`Login failed for ${user.username}`)
                    } else {
                        // логін пройшов, робимо logout
                        cy.get("#react-burger-menu-btn").click({ force: true })
                        cy.get("#logout_sidebar_link").click({ force: true })
                    }
                })
            })
        })


    })

    it("new test will be added", () => {
        
    })
})