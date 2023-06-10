describe('My Test Suite name', function () {
    it('Verify HTML Table', function () {
        cy.visit("https://testautomationpractice.blogspot.com/");
        //Verify element anywhere in table
        cy.get("table[name='BookTable']").contains('td', 'Selenium').should('be.visible');
        //Verify element in specific row and column
        cy.get('table[name=BookTable] tbody tr td:nth-child(1)').each(($e, index, $list) => {
            const text = $e.text();
            if (text.match("Master In JS")) {
                cy.get('table[name=BookTable] tbody tr td:nth-child(2)').eq(index).then(function (AuthorName) {
                    const authorName = AuthorName.text();
                    expect(authorName).to.equal('Amit')
                })
            }

        })
    }
    )
}
)