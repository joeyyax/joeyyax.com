/// <reference types="cypress" />

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("body").should("have.class", "page-transition--complete");
  });

  // it("page transition started", () => {
  //   cy.get("body").should("have.class", "page-transition--in-progress");
  //   cy.screenshot();
  // });

  it("page transition completed", () => {
    cy.get("body").should("have.class", "page-transition--complete");
    cy.screenshot();
  });

  it("should contain an h1", () => {
    cy.get("h1");
  });

  it("should contain link to joey@joeyyax.com", () => {
    cy.get('a[href*="mailto:joey@joeyyax.com"]');
  });
});
