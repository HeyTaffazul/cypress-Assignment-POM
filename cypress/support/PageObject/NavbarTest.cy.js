class NavbarPage {
    EnterURL() {
      cy.visit("https://www.flipkart.com");
    }
//Home
clickHome() {
    cy.get('img[title="Flipkart"][src*="fkheaderlogo"]',{ timeout: 10000 }).click();
  }
//About    
clickAbout() {
    cy.get('a[aria-label="About Us"]').click();
  }
//Contact
  clickContact() {
    cy.visit('[aria-label="Contact Us"]').click({force: true});
      cy.url('include',"helpcentre?otracker")
  }
    }
    
    export default NavbarPage;