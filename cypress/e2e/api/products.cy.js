import { getProducts } from "../../utils/apiHelper"

describe("Products API", () => {

  it("should get products", () => {

    getProducts().then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body.products.length).to.be.greaterThan(0)

    })

  })

})