import DynamicContentPage from "../../support/PageObject/DynamicContentPage.cy";

describe('Dynamic Content Scrolling Test', () => {
    const dynamicContentPage = new DynamicContentPage();

    it('Should load new content when scrolled to the bottom', () => {
        cy.visit('https://www.flipkart.com');

        //Ensure there is content before scrolling
        dynamicContentPage.getContentItems();

        // Scroll to the bottom
        dynamicContentPage.scrollToBottom();

        cy.wait(3000);

        //Verify that new content items are loaded
        cy.get('.content-item').should('have.length.greaterThan', 10); 

        //Bonus
        const previousItemCount = 10;
        cy.get('.content-item').should('have.length', previousItemCount + 5);
    });
});