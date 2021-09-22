describe("App", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("Frontpage can be opened", () => {
    cy.contains("CLOTHESSTORE")
  })

  it("Search product", () => {
    cy.get("[placeholder='Buscar aquí producto']").type("camisa")
    cy.get("#btn-search").click()
    cy.get("#productsList")
    cy.get("#productCard")
  })
})