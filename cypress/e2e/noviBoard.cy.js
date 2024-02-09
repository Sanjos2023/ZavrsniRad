describe("Login vivifyscrum and create a new Board", () => {
  it("Login and create a new Board", () => {
    cy.visit("https://cypress.vivifyscrum-stage.com/login");

    cy.get(":nth-child(1) > .el-form-item__content").type("sanjaQA1@gmail.com");
    cy.get('[type="password"]').type("bolonjeze123");
    cy.get(".vs-u-text--left > .vs-c-btn").click();
    cy.url().should("not.include", "/login");
    cy.get("h2").should("have.text", "biznisiAdd new Organization");
    cy.get(".vs-c-my-organization__board-new").click();
    cy.get(".vs-input-border > input").type("nova");
    cy.get('[name="next_btn"]').click();
    cy.get(":nth-child(1) > .vs-c-radio > .vs-c-radio-check").click();
    cy.get('[name="next_btn"]').click();
    cy.get('[name="next_btn"]').click();
    cy.get('[name="next_btn"]').click();
    cy.get('[name="next_btn"]').click();
    cy.visit("https://cypress.vivifyscrum-stage.com/boards/17595");
  });
});
