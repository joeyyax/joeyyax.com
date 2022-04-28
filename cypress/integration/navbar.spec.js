/// <reference types="cypress" />

describe("Navbar", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Contact link is present", () => {
    cy.get('#navbar a[href*="/contact"]')
  })

  it("Branding is present and links to homepage", () => {
    cy.get("#navbar .branding").click()
    cy.url().should("include", "/")
  })
})
