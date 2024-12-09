describe('SauceDemo - QA Automation', { testIsolation: false }, () => {

    it('Visit the page', () => {
        cy.visit('https://www.saucedemo.com', { timeout: 120000 });
    });

    it('Login User 1 and complete flow', () => {
        cy.login('standard_user', 'secret_sauce');
        cy.addProductsToCart([0, 1, 2]);
        cy.checkout('usuario1', 'LastName User 1', '3600');
        cy.validateCheckout();
        cy.logout();
    });

    it('Login User 2 and complete flow', () => {
        cy.login('problem_user', 'secret_sauce');
        cy.addProductsToCart([0, 1, 2]);
        cy.checkout('usuario2', 'LastName User 2', '3600');
        cy.validateCheckout();
        cy.logout();
    });
});

