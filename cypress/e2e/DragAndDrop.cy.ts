describe('Drag and drop', () => {

    before(() => {
        cy.visit("https://www.globalsqa.com/demo-site/draganddrop/");
    });

    it('Verify Drag and drop event', () => {

        const dataTransfer = new DataTransfer();
        cy.get("img[alt='The peaks of High Tatras']").trigger('dragstart', {
            dataTransfer
        });

        cy.get("div[id='trash']").trigger('dragstart', {
            dataTransfer
        });

        cy.find("div[id='trash']").dblclick();
        })
})