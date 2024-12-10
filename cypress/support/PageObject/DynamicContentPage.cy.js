class DynamicContentPage {
    // Method to scroll to the bottom of the page
    scrollToBottom() {
        cy.scrollTo('bottom', { ensureScrollable: false });  // Ensures scrolling to the bottom
    }

    // Method to get the list of dynamic content items
    getContentItems() {
        cy.get('.content-item', { timeout: 10000 }).should('have.length.greaterThan', 0);
    }
}

export default DynamicContentPage;
