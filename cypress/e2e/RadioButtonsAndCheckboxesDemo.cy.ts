describe("Check UI Functions", () => {

    it.skip("Checking Radio Buttons", () => {

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.url().should("eq","https://itera-qa.azurewebsites.net/home/automation")
      
        //Visiblity of radio buttons
        cy.get("#female").should("be.visible")
        cy.get("#male").should("be.visible")


        //Selecting Male radio button 
        cy.get("#male").check().should("be.checked");
        cy.get("#female").should("not.be.checked")

        //Selecting Female radio button 
        cy.get("#female").check().should("be.checked");
        cy.get("#male").should("not.be.checked")
    })


    it("Interact with checkbox",()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.url().should("eq","https://itera-qa.azurewebsites.net/home/automation")


        //Visibility of elements
        cy.get("#monday").should("be.visible");``

        //Selecting single checkbox and verify it is checked
        cy.get("#monday").check().should("be.checked")

        //Unselecting the checkbox
        cy.get("#monday").uncheck().should("not.be.checked")

        //Selecting all checboxes
        cy.get("[class='form-check-input'][type='checkbox']").check().should("be.checked")

        //Unselect all checkbox
        cy.get("[class='form-check-input'][type='checkbox']").uncheck().should("not.be.checked")

       //Select the first checkbox
        cy.get("[class='form-check-input'][type='checkbox']").first().check().should("be.checked")

    })

})