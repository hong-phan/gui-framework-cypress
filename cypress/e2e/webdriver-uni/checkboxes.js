/// <reference types="Cypress" />
describe('Verify checkboxes via webdriveruni', () => {
    it('Check and validate checkbox', () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();

        cy.get('#checkboxes > :nth-child(1) > input').as('option-1');
        cy.get('@option-1').check().should('be.checked');
    });

    it('Uncheck and validate checkbox', () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();

        cy.get('#checkboxes > :nth-child(5) > input').as('option-3');
        cy.get('@option-3').uncheck().should('not.be.checked');  
    });

    it('Check multiple checkboxes', () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();
        
        cy.get('input[type="checkbox"]').check(['option-1', 'option-2', 'opetion-3', 'option-4']).should('be.checked');
    });
    
});