it('Example of read file',function(){
    cy.readFile('./cypress/fixtures/example.json').then((data) => cy.log(data.name));
})

it('Example of write File',function(){
    cy.writeFile("./cypress/fixtures/example.json","'Key' : 'Value'",{flag:'a+'});
})