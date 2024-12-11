class NavbarPage {
    EnterURL() {
      cy.visit("https://www.flipkart.com");
    }
//Home
clickHome() {
    cy.get('img[title="Flipkart"][src*="fkheaderlogo"]').click();
  }
//About
clickAbout() {
    cy.get('[aria-label="About Us"]').click();
    cy.url({timeout: 10000}).should('include','');
  }
//Contact
  clickContact() {
    cy.visit('[aria-label="Contact Us"]').click({force: true});
      cy.url({timeout: 10000}).should('include','helpcentre?otracker');
  }
    }
    
    export default NavbarPage;