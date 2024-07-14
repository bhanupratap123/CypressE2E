import { each } from "cypress/types/bluebird";

describe('Practise Cypress', () => {
  it('My first test', () => {

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get("input[class='search-keyword']").type("ca");
    cy.get("button[class='search-button']").click();

    //Verify Invisible Element
    cy.get(".product:visible").should('have.length', 4);
    cy.get('.products').as('productLocator');

    //Parent child chainings
    cy.get("@productLocator").find(".product").should('have.length', 4);
    cy.get("@productLocator").find(".product").eq(2).contains("ADD TO CART").click();

    //Grabbing text from the list
    cy.get(".products").find(".product").each(function ($el, index, $listOfelement) {
      const textVeg = $el.find("h4.product-name").text();
      console.log("textVeg: " + textVeg);
      if (textVeg.includes("Cashews")) {
        cy.wrap($el).find("button:contains('ADD TO CART')").click();
      }
    });

    //Cypress Asynchronous nature
    cy.get('.brand').then(function (logoElement) {
      cy.log(logoElement.text());

    })

    //Assert text contains text GREENKART
    cy.get('.brand').should('have.text', "GREENKART");
  })

  it("My second test case", function () {

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get("input[class='search-keyword']").type("ca");
    cy.get("button[class='search-button']").click();

    cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click();
    cy.get(".cart-icon").click();
    cy.contains('PROCEED TO CHECKOUT').click();
    cy.contains('Place Order').click();
    cy.contains('Proceed').should('be.enabled');
  })

  it('Practice Radio button', function () {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#checkBoxOption1").check().should('be.checked').
      and('have.value', "option1");
    cy.get("#checkBoxOption1").uncheck().should('not.be.checked');
    cy.get("input[type='checkbox']").check(["option1", "option2", "option3"])
  })

  it('Handle both static and dropdown', function () {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#checkBoxOption1").check().should('be.checked').
      and('have.value', "option1");
    cy.get("#checkBoxOption1").uncheck().should('not.be.checked');
    cy.get("input[type='checkbox']").check(["option1", "option2", "option3"])
  })

  // Remove the target attribute , it will not launch the new url on different tab , it will launch the new url on same tab
  it('Handle of child tab', function () {
    cy.get("#openTab").invoke('removeAttr', 'target').click();
  })

  it('Handle of child tab', function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("tr td:nth-child(2)").each(function ($el, index, $list) {
      const productName = $el.text();
      if (productName.includes('Python')) {
        cy.get('tr td:nth-child(2)').eq(index).next().then(function (price) {
          expect(price.text()).to.equal('25');
        }
        )
      }
    })
  })

  it.only('Handle Mouse event', function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("[class='mouse-hover'] button").trigger('mouseover')
    cy.contains('Top').click();
    cy.url().should('have.text','top');
  })
});