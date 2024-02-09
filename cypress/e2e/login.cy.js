describe("Login vivifyscrum", () => {
  before(() => {});

  beforeEach(() => {
    cy.visit("https://cypress.vivifyscrum-stage.com/login");

    cy.get(":nth-child(1) > .el-form-item__content").type("sanjaQA1@gmail.com");
    cy.get('[type="password"]').type("bolonjeze123");
    cy.get(".vs-u-text--left > .vs-c-btn").click();
  });

  it("Login vivifyscrum", () => {
    cy.visit("https://cypress.vivifyscrum-stage.com/login");

    cy.get(":nth-child(1) > .el-form-item__content").type("sanjaQA1@gmail.com");
    cy.get('[type="password"]').type("bolonjeze123");
    cy.get(".vs-u-text--left > .vs-c-btn").click();
  });

  it("Login vivifyscrum positive case", () => {
    cy.visit("https://cypress.vivifyscrum-stage.com/login");

    cy.url().should("contain", "/login");
    cy.get("h1").should("have.text", "Log in with your existing account");
    cy.get("label").eq(0).should("have.text", "Email Address");
    cy.get("label").eq(1).should("have.text", "Password");
    cy.get(":nth-child(1) > .el-form-item__content").type("sanjaQA1@gmail.com");
    cy.get('[type="password"]').type("bolonjeze123");
    cy.get(".vs-u-text--left > .vs-c-btn").click();
  });

  it("Login vivifyscrum negative case", () => {
    cy.visit("https://cypress.vivifyscrum-stage.com/login");

    cy.url().should("contain", "/login");
    cy.get("h1").should("have.text", "Log in with your existing account");
    cy.get("label").eq(0).should("have.text", "Email Address");
    cy.get("label").eq(1).should("have.text", "Password");
    cy.get(":nth-child(1) > .el-form-item__content").type("sanjaQA1@gmail.com");
    cy.get('[type="password"]').type("bolonjeze1234");
    cy.get(".vs-u-text--left > .vs-c-btn").click();

    cy.get(".vs-u-text--left > .vs-c-btn").should("be.visible");
  });
});
