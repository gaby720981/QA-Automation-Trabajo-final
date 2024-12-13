
describe('SauceDemo - QA Automation', { testIsolation: false }, () => {

    //TESTS USER 1

    it('Visit the page', () => {
        cy.visit('https://www.saucedemo.com');
        
    });

    it('Login User 1', () => {
        cy.loginIncorrectPass('standard_user', '123456');
        cy.loginOk('standard_user', 'secret_sauce');
    });

    it('Add products to cart User 1', () => {
        cy.addProductsToCart([0, 1, 2])
    });

    it('Checkout User 1', () => {
        cy.checkout('usuario1', 'LastName User 1', '3600');
        cy.validateCheckout();
    });

    it('Logout User 1', () => {
        cy.logout();
    });

    //TESTS USER 2

    it('Login User 2', () => {
        cy.loginIncorrectPass('problem_user', '123456');
        cy.loginOk('problem_user', 'secret_sauce');
    });

    it('Add products to cart User 2', () => {
        cy.addProductsToCart([0, 1, 2]);
    });

    it('Checkout User 2', () => {
        cy.checkout('usuario2', 'LastName User 2', '3600');
        cy.validateCheckout();
    });

    it('Logout User 2', () => {
        cy.logout();
    });
});

