class login {
    EnterURL(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }
    loginOrm(){
        cy.get('[name="username"]').type("Admin");
        cy.get('[name="password"]').type("admin123");
        cy.get('[type="submit"]').click();
    }
}

export default login;