describe("User can login to GoIT page", () => {
  beforeEach("go to page", () => {
    cy.visit("https://www.edu.goit.global/account/login");
  });

  it("succesfully navigates to the GoIT page", () => {
    cy.wait(5000);
    cy.url().should("include", "account/login");
  });

  it("successfully login to the GoIT page", () => {
    cy.loginUser("testowyqa@qa.team", "QA!automation-1");
    cy.url().should("include", "homepage");
    cy.get(".profile-nav").should("be.visible");
    cy.get(".profile-nav").click();
    cy.contains("Log out").should("be.visible").click();
    cy.contains("L og in").should("be.visible");
  });
});
