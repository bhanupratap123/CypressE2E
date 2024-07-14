describe('Handling Frames',()=>{
  
    it('Approach 1:',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.wait(1000);
        // This line creates a frame and stored it in JS variable
        let iFrame = cy.get('#mce_0_ifr').its('0.contentDocument.body')
        .should('be.visible').
        then(cy.wrap);
        iFrame.clear().type("Welcome to the Iframe");
        cy.get("button[aria-label='Bold']").click();
    });

   it.only('Approach 2:',()=>{
    cy.visit("https://the-internet.herokuapp.com/iframe");
    cy.wait(1000);
    cy.invoke('#mce_0_ifr').type('Welcome to the Iframe');
   })

})