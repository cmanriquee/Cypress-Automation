// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Giving Assistant - Automation Candidate 1', function() {
    it('Verify that the user can subscribe with a valid email address and the success message is displayed.', function() {
    
    //Visit the Demo Nike Coupon Code page
    cy.visit("https://givingassistant.org/coupon-codes/nike.com");
 
    cy.get('.about_sephora > .subscription-form > .subscription-form__controls-wrapper > .subscription-form__controls > .input-group > .form-control')
      .type('qa_challenge_1@test.com')
      .should('have.value', 'qa_challenge_1@test.com')
    
    cy.get('.about_sephora > .subscription-form > .subscription-form__controls-wrapper > .subscription-form__controls > .input-group > .input-group-btn > .subscription-form__button')
      .click();
      
    cy.get('#subscriptionEmail-error')//.should('have.value', 'Did you mean to write qa_challenge_1@me.com?')
   
    cy.get('.about_sephora > .subscription-form > .subscription-form__controls-wrapper > .subscription-form__controls > .input-group > .input-group-btn > .subscription-form__button')
      .click();
    
    cy.get('.about_sephora > .subscription-form > .subscription-form__controls-wrapper > .subscription-form__controls > .subscription-form__success-msg')
      .contains('Congrats! You’re officially subscribed to Giving Assistant!')
    
    
})
})