// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js

Cypress.Commands.add('login', (username, password) => {
    cy.get('[placeholder="Username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('#login-button').click();
});

Cypress.Commands.add('addProductsToCart', (productIndices) => {
    productIndices.forEach(index => {
        cy.get('.inventory_item').eq(index).find('button').click();
    });
    cy.get('.shopping_cart_link').should('contain', productIndices.length.toString());
});

Cypress.Commands.add('checkout', (firstName, lastName, postalCode) => {
    cy.get('.shopping_cart_link').click();
    cy.contains('Checkout').click();
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
});

Cypress.Commands.add('validateCheckout', () => {
    cy.get('.complete-header').contains('Thank you for your order!').should('be.visible');
});

Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
});