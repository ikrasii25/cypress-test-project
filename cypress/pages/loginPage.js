class LoginPage {

    visit() {
        cy.visit("/")
    }

    enterUsername(userName) {
        cy.get("#user-name").type(userName)
    }

    enterPassword(password) {
        cy.get("#password").type(password)
    }

    clickLogin() {
        cy.get("#login-button").click()
    }
}

export default new LoginPage()