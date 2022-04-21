/// <reference types="cypress" />

// Navbar
describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("body").should("have.class", "page-transition--complete");
  });

  it("Branding is present", () => {
    cy.get(".branding");
  });

  it("Branding links to homepage", () => {
    cy.get(".branding").click();
    cy.url().should("include", "/");
  });
});

// Footer
describe("Footer", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("body").should("have.class", "page-transition--complete");
  });

  // copyright
  it("Copyright is present", () => {
    cy.get(".copyright");
  });

  // copyright is current
  it("Copyright is up to date", () => {
    const currentYear = new Date().getFullYear();
    cy.get(".copyright").contains(currentYear);
  });

  // socials
});
