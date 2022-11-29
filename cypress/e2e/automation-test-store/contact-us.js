/// <reference types="Cypress"/>
describe("Test Contact Us form via Automation Test Store", () => {
    it("Should be able to submit a successful submission via Contact Us", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('[href*="contact"]').click();
        cy.get('#ContactUsFrm_first_name').type('Pink');
        cy.get('#ContactUsFrm_email').type('pink_phan@gmail.com');
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').type('Do you provide additional discount on bulk orders?');
        cy.get('[title="Submit"]').click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
    });


});


