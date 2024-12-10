import NavbarPage from "../../support/PageObject/NavbarTest.cy";


describe('Navbar Navigation Tests', () => {
    const navbar = new NavbarPage();
  
    it('Should navigate to the Home page', () => {
        navbar.clickHome();
        cy.url().should('include', 'flipkart.com');
      });

  
    it('Should navigate to the About Us page', () => {
    navbar.clickAbout();
    cy.url().should('include', 'corporate.flipkart.net/corporate-home');
  });
  
  it('Should navigate to the Contact Us page', () => {
    navbar.clickContact();
    cy.url().should('include', '/helpcentre?otracker=footer_navlinks'); // Adjust as necessary
  });

  });