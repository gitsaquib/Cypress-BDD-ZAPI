import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given('I am at shopping site',()=>{
    cy.visit("https://demo.applitools.com/gridHackathonV1.html");
    cy.url().should('include', 'gridHackathon');
    expect(cy.get('#INPUTtext____42').should('exist'));
    expect(cy.get('#I__headericon__44').should('exist'));
})

When('I filter Products',()=>{
    let a = 0;
        cy.get('#SPAN__checkmark__107').click();
        cy.get('#filterBtn').click();
        cy.get('#product_grid').find('img').then(list => {
            a = Cypress.$(list).length;
        });
        cy.get('#SMALL____105').should(($s) => {
            const b = parseInt($s.text());
            expect(a).to.equal(b); 
        });
    
});

Then('I add product to shopping cart',()=>{
    cy.get('#product_grid').find('img').then(list => {
        Cypress.$(list).first().click();
    });
    cy.get('#shoe_name').should($text => {
        const t = $text.text();
        expect(t).to.equal('Appli Air x Night');
    });
});


