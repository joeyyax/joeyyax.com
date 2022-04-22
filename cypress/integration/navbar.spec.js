/// <reference types="cypress" />

describe("Navbar", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Branding is present and links to homepage", () => {
    cy.get(".branding").click()
    cy.url().should("include", "/")
  })
})
