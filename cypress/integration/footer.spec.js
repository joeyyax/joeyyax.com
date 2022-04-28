/// <reference types="cypress" />

describe("Footer", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Disclaimer link is present", () => {
    cy.get('#footer a[href*="/disclaimer"]')
  })
})
