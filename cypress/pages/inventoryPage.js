class InventoryPage {
    inventoryList() {
        return cy.get(".inventory_list")
    }

    addBackpackToCart() {
        cy.contains("Sauce Labs Backpack")
        .parents(".inventory_item")
        .find("button")
        .click()
    }

    openCart() {
        cy.get(".shopping_cart_link").click()
    }
}

export default new InventoryPage()