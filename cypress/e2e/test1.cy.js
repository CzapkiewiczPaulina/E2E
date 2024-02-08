describe("User can login to GoIT page", () => {
  beforeEach("go to page", () => {
    cy.visit("https://www.edu.goit.global/account/login");
  });

  it("successfully login to the GoIT page", () => {
    cy.loginUser("testowyqa@qa.team", "QA!automation-1");
    cy.url().should("include", "homepage");
    cy.get(".profile-nav").should("be.visible");
    cy.get(".profile-nav").click();
    cy.contains("Log out").should("be.visible").click();
    cy.contains("L og in").should("be.visible");
  });

  it("successfully login to the GoIT page", () => {
    cy.loginUser("user888@gmail.com", "1234567890");
    cy.url().should("include", "homepage");
    cy.get(".profile-nav").should("be.visible");
    cy.get(".profile-nav").click();
    cy.contains("Log in").should("be.visible");
  });
});
