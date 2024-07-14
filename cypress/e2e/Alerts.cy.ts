describe('Alerts',()=>{

    //1) Javascript Alerts : It will have some text and OK Button
    it('Javascript Alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.on('window:alert',(t)=>{
            expect(t).to.contain('I am a JS Alert')
        })
        cy.get("#result").should('have.text','You successfully clicked an alert')
    })


    //Cypress Automatically closed alert by clicking on Ok button
    it.skip('JS Confirm Alert',()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm',(t)=>{
            expect(t).to.contain('I am a JS Confirm')
        })

        cy.get("#result").should('have.text','You clicked: Ok')
    })

    //Closed Alert by clicking on cancel button
    it.skip('JS Confirm Alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        
        cy.on('window:confirm',(t)=>false)
        cy.get("#result").should('have.text','You clicked: Cancel')
    })

     // JS Prompt Alert: It will have some text with a text box for user input along with OK
     it.skip('JS Confirm Alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('Welcome')
        })

        cy.get("button[onclick='jsPrompt()']").click()
        cy.get("#result").should('have.text','You entered: Welcome')
    })
})