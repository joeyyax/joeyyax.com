/// <reference types="cypress" />

describe("Contact Page", () => {
  beforeEach(() => {
    cy.visit("/contact")
  })

  it("Contact form works", () => {
    cy.get('form[name="contact-form"]').within(() => {
      cy.get('input[name="fname"]').type("Joey").should("have.value", "Joey")

      cy.get('input[name="lname"]').type("Yax").should("have.value", "Yax")

      cy.get('input[name="org"]')
        .type("joeyyax")
        .should("have.value", "joeyyax")

      cy.get('input[name="email"]')
        .type("joey@joeyyax.com")
        .should("have.value", "joey@joeyyax.com")

      cy.get('textarea[name="message"]')
        .type("This is an e2e test message")
        .should("have.value", "This is an e2e test message")

      cy.get('button[type="submit"]').click()

      cy.get('form[name="contact-form"]').should("not.exist")
    })

    cy.get(".form-success").should("exist")
  })
})
