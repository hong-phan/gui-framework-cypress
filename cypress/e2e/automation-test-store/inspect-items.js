///<reference types="cypress"/>
describe('Inspect Automation Test Store items using chain of command', () => {
    it('Click on the first item header', () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.prdocutname[title="Skinsheen Bronzer Stick"]').click();
    });

    it('Click on the first item text', () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click();
    });
    
    it.only('Click on the first item using idex', () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
    });
});
