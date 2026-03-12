export const getProducts = () => {
    return cy.request({
        method: "GET",
        url: "https://dummyjson.com/products"
    })
}