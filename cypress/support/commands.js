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
    // Intercept the POST request to monitor the API
    cy.intercept('POST', 'https://submit.backtrace.io/UNIVERSE/TOKEN/json').as('testAPI')
    // Enter username and password
    cy.get('[placeholder="Username"]').clear().type(username)
    cy.get('[data-test="password"]').clear().type(password)
    // Click the login button
    cy.get('#login-button').click()
    // Verify that the API response has a 503 error
    cy.wait('@testAPI').its('response.statusCode').should('eq', 503)

});

Cypress.Commands.add('loginOk', (username, password) => {
    cy.get('[placeholder="Username"]').clear().type(username)
    cy.get('[data-test="password"]').clear().type(password)
    cy.get('#login-button').click()
});


Cypress.Commands.add('addProductsToCart', (productIndices) => {
    // Add each product based on its index
    productIndices.forEach(index => {
        cy.get('.inventory_item').eq(index).find('button').click()
    });
    // Verify the cart shows the same number as the indices
    cy.get('.shopping_cart_link').should('contain', productIndices.length.toString())
});

Cypress.Commands.add('checkout', (firstName, lastName, postalCode) => { 
    // Open the cart and proceed to checkout
    cy.get('.shopping_cart_link').click()
    cy.contains('Checkout').click()
    // Fill in the form fields
    cy.get('[data-test="firstName"]').clear().type(firstName)
    cy.get('[data-test="lastName"]').clear().type(lastName)
    cy.get('[data-test="postalCode"]').clear().type(postalCode)
    // Finalize the purchase
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
});


Cypress.Commands.add('validateCheckout', () => {
    // Verify the confirmation message
    cy.get('.complete-header').contains('Thank you for your order!').should('be.visible')
});

Cypress.Commands.add('logout', () => {
    // Open the menu and log out
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
});
