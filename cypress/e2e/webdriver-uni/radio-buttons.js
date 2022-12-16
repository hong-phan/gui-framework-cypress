/// <reference types='cypress'/>
describe('Verify radio buttons via webdriveruni', () => {
    it('Check specific radio buttons', () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();

        cy.get('#radio-buttons').find('[type="radio"]').first().check();
        cy.get('#radio-buttons').find('[type="radio"]').eq(2).check();
        
    });

    it.only('Validate the states of specific radio buttons', () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();

        cy.get('[value="lettuce"]').check()
        cy.get('[value="lettuce"]').should('be.checked');

        cy.get('[value="pumpkin"]').should('not.be.checked');

        cy.get('[value="cabbage"]').should('be.disabled');
    });
    
});