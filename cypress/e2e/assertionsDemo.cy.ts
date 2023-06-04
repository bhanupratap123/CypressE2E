
describe('Assertion Demo', () => {
  it.skip('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.wait(1);
    cy.contains('get').click();
    cy.get('#query-btn').should('contain', 'Button').should('have.class', 'query-btn').
      should('be.visible')
      .should('be.enabled').
      should('have.css', "background-color");
    // This is the exampe of explicit wait
    // expect(true).to.be.false;
    assert.strictEqual(7 > 3, true);
  }
  )
  it('Implicit Assertion', () => { 
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.wait(1);
    cy.url().should("include", "orangehrmlive.com")
      .and("contain", "orangehrmlive.com")
      .and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");


      cy.title().should("include","Orange")
      .and("eq","OrangeHRM")
  }
  )
}
)