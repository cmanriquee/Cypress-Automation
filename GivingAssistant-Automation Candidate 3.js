// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Giving Assistant - Automation Candidate 3', function() {
    it('Verify that Validation error is displayed when entering Blank spaces.', function() {
    
    //Visit the Demo Nike Coupon Code page
    cy.visit("https://givingassistant.org/coupon-codes/nike.com");
 
    cy.get('.about_sephora > .subscription-form > .subscription-form__controls-wrapper > .subscription-form__controls > .input-group > .form-control').type('{enter}')
      .should('have.value', '')
    
    cy.get('.about_sephora > .subscription-form > .subscription-form__controls-wrapper > .subscription-form__controls > .input-group > .input-group-btn > .subscription-form__button')
      .click();
        
    cy.get('#subscriptionEmail-error')
      .contains('This field is required.')
    
    
})
})