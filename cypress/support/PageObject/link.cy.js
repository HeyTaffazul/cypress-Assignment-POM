class links {
    clickLink(link){
        cy.contains(link).click();
    }
}

export default links;