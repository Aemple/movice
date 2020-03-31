describe('First Test', () => {
    it('Visit the app', () => {
        cy.visit('/');
        cy.contains('个人中心').click();
        cy.url().should('include', '/login');
        cy.get('.testusername').type('fake@email.com');
        // .should('have.value', 'fake@email.com');
        cy.get('.testpwd').type('123456');
        cy.get('.testdenglu').click();
    });
});
