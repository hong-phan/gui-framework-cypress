/// <reference types="Cypress"/>
describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via Contact Us", ()=> {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.document().should('have.property','charset').and('eq','UTF-8');
        cy.title().should('include','WebDriver | Contact Us');
        cy.url('').should('include', 'contactus');
        cy.get('[name="first_name"]').type("Pink");
        cy.get('[name="last_name"]').type('Phan');
        cy.get('[name="email"]').type('pink_phan@gmail.com');
        cy.get('textarea.feedback-input').type('Learn Cypress');
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!');

    });

    it("Should not be able to submit a successful submission via Contact Us form as all fields are required", ()=> {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Pink");
        cy.get('[name="last_name"]').type('Phan');
        cy.get('[name="email"]').type('pink_phan@gmail.com');
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required')
    })


});


