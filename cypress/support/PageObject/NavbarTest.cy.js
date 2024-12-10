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
    cy.get('a[aria-label="About Us"]').click(); // Replace with the correct selector for the About Us link
  }
//Contact
  clickContact() {
    cy.get('a[aria-label="Contact Us"]').click(); // Replace with the correct selector for the Contact Us link
  }
    }
    
    export default NavbarPage;