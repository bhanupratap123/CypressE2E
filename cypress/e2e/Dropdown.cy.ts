
describe("Handle dropdowns", () => {

    it.skip("dropdown with select", () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.url().should("eq", "https://itera-qa.azurewebsites.net/home/automation")

        cy.get("[class='custom-select']").select("Turkey")
    })

    it.skip("Boot Strap dropdown without select class", () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.url().should("eq", "https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("[aria-label='Country'] span[class='select2-selection__arrow']").click();
        cy.get("input[class='select2-search__field']").type("India").type("{enter}")

    })

    // Dynamic in nature 
    it.skip("Auto Suggestion dropdown", () => {
        cy.visit("https://www.wikipedia.org/")
        cy.get("input#searchInput").type("Delhi")
        cy.get("[class='suggestion-title']").contains("Delhi Capitals").click();
    })

    //Include jquerry function Dynamic dropdown
    it.skip("Auto Suggestion dynamic dropdown", () => {
        cy.visit("https://www.google.com/")
        cy.get("textarea[title='Search']").type("Delhi")
        cy.wait(4)
        cy.get(".wM6W7d span").each(($element, index, $array) => {
            if ($element.text() === 'delhi weather') {
                cy.wrap($element).click()
            }
        })
    })

    // it.only("Auto Suggestion dynamic dropdown", () => {
    //     cy.visit("https://www.google.c om/")
    //     cy.get("textarea[title='Search']").type("Delhi")
    //     cy.wait(4)
    //     cy.get(".wM6W7d span").each(($element, index, $array) => {
    //         if ($element.text() === 'delhi weather') {
    //             cy.wrap($element).click()
    //         }
    //     })
    // }

   // )

   it('Auto Suggestion',()=>{
    cy.visit("https://www.google.com/");


 
   });
})
