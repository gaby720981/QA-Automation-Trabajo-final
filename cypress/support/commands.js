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

Cypress.Commands.add('loginIncorrectPass', (username, password) => {

    cy.intercept('POST', 'https://submit.backtrace.io/UNIVERSE/TOKEN/json').as('testAPI')
    cy.get('[placeholder="Username"]').clear().type(username)
    cy.get('[data-test="password"]').clear().type(password)
    cy.get('#login-button').click()
    cy.wait('@testAPI').its('response.statusCode').should('eq', 503)

});

Cypress.Commands.add('loginOk', (username, password) => {
    cy.get('[placeholder="Username"]').clear().type(username)
    cy.get('[data-test="password"]').clear().type(password)
    cy.get('#login-button').click()
});


Cypress.Commands.add('addProductsToCart', (productIndices) => {
    productIndices.forEach(index => {
        cy.get('.inventory_item').eq(index).find('button').click()
    });
    cy.get('.shopping_cart_link').should('contain', productIndices.length.toString())
});

Cypress.Commands.add('checkout', (firstName, lastName, postalCode) => { 
    cy.get('.shopping_cart_link').click()
    cy.contains('Checkout').click()

    cy.get('[data-test="firstName"]').clear().type(firstName)
    cy.get('[data-test="lastName"]').clear().type(lastName)
    cy.get('[data-test="postalCode"]').clear().type(postalCode)

    cy.get('[data-test="firstName"]').should('have.value', firstName)
    cy.get('[data-test="lastName"]').should('have.value', lastName)
    cy.get('[data-test="postalCode"]').should('have.value', postalCode)

    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
});


Cypress.Commands.add('validateCheckout', () => {
    cy.get('.complete-header').contains('Thank you for your order!').should('be.visible')
});

Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
});
