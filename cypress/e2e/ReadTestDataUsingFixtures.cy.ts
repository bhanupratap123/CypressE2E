describe('Test Suite Name', function () {

    before(function () {

        cy.fixture('example').then(function (data) {
            this.data = data;
        })
    })

    it('Login', function () {

        cy.visit("https://admin-demo.nopcommerce.com/login");

        cy.get("#Email").clear();
        cy.get("#Email").type(this.data.email)
        cy.get("#Password").clear();
        cy.get("#Password").type(this.data.password)
        cy.get("button[type='submit']").click();

        cy.title().should('eq',"Dashboard / nopCommerce administration")
    }
    )
}
)