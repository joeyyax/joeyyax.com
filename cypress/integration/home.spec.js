/// <reference types="cypress" />

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  // it("takes screenshot of different viewport sizes", () => {
  //   // wait for page transition to complete
  //   cy.get("body").should("have.class", "page-transition--complete")

  //   // desktop screenshot
  //   cy.viewport("macbook-15")
  //   cy.screenshot("desktop")

  //   // tablet screenshot
  //   cy.viewport("ipad-2")
  //   cy.screenshot("tablet")

  //   // mobile screenshot
  //   cy.viewport("iphone-x")
  //   cy.screenshot("mobile")
  // })

  it(`should contain link to joey@joeyyax.com`, () => {
    cy.get('a[href*="mailto:joey@joeyyax.com"]')
  })
})
