
describe('Practise Cypress @regression', () => {
  it('My first test', () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('[id="radio-btn-example"] label input').eq(1).check().should('be.checked');
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
  it.only('Handle of child tab', function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get('fieldset a#opentab')
      .invoke('removeAttr', 'target')
      .click();

    cy.origin('https://www.qaclickacademy.com', () => {
      cy.get('div[class*="support-button"] p')
        .then(($element) => {
          let text = $element.text();
          expect(text).to.equal('Need Help? email us');
        });
    });

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

  it('Handle Mouse event', function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("[class='mouse-hover'] button").trigger('mouseover')
    cy.contains('Top').click();
    cy.url().should('have.text', 'top');
  })
});