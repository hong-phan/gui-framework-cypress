///<reference types="cypress"/>
describe('Verify variables, cypress commands and jquery commands', () => {
    it('Navigating to specific product pages', () => {
        cy.visit("https://automationteststore.com/");

        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
        // makeupLink.click();
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");
        // skincareLink.click();
        // const fragranceLink = cy.get("a[href*='product/category&path=']").contains("Fragrance");
        // fragranceLink.click();

        //Recommended Approach
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        cy.get("a[href*='product/category&path=']").contains("Skincare").click();
        cy.get("a[href*='product/category&path=']").contains("Fragrance").click();
    });

    it('Navigating to specific product pages', () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();

        // Following code will fail
        // const header = cy.get("h1 .maintext");
        // cy.log(header.text());

        cy.get("h1 .maintext").then(($headerText)=>{
            const headerText = $headerText.text();
            cy.log("Found header text: " + headerText);
            expect(headerText).is.eq('Makeup')
        })
    });

});
