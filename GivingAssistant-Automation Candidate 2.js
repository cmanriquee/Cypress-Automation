// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Giving Assistant - Automation Candidate 2', function() {
    it('Verify that the user cannot subscribe with an Invalid email address and the "error message" is displayed.', function() {
    
    //Visit the Demo Nike Coupon Code page
    cy.visit("https://givingassistant.org/coupon-codes/nike.com");
 
    cy.get('.about_sephora > .subscription-form > .subscription-form__controls-wrapper > .subscription-form__controls > .input-group > .form-control').type('test@invalid,com')
      .should('have.value', 'test@invalid,com')
    
    cy.get('.about_sephora > .subscription-form > .subscription-form__controls-wrapper > .subscription-form__controls > .input-group > .input-group-btn > .subscription-form__button')
      .click();
        
    cy.get('#subscriptionEmail-error')
      .contains('Please enter a valid email address.')
    
    
})
})