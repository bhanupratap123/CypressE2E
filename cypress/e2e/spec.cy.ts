describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://google.com')
    cy.get('#APjFqb').type("Bhnau Pratap Singh")
    cy.get("div[jsname='VlcLAe']>center>[value='Google Search']").click
  })
})