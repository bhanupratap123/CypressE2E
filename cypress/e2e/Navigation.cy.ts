describe('My test suite name', function () {


    it('Navigation Test', function () {

        cy.visit("https://demo.nopcommerce.com/")
        cy.title().should('eq', "nopCommerce demo store")

        cy.get(".ico-register").click();
        cy.wait(2);
        cy.title().should('eq', "nopCommerce demo store. Register");

        cy.go('back')
        cy.wait(2);

        cy.title().should('eq', "nopCommerce demo store")

        cy.go('forward')
        cy.wait(2);
        cy.title().should('eq', "nopCommerce demo store. Register");

        cy.get(".ico-register").click();
        cy.wait(2);
        cy.title().should('eq', "nopCommerce demo store. Register");

        //-1 used for Navigating back and +1 used for navigating forward
        cy.go(-1)
        cy.wait(2);
        cy.title().should('eq', "nopCommerce demo store")

        cy.go('forward')
        cy.wait(+1);
        cy.title().should('eq', "nopCommerce demo store. Register");
    })
})