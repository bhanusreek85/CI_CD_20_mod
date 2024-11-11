describe('Home Page', () => {
    it('should visit the home page and check for the startquiz button', () => {
      // Visit the home page
      cy.visit('/');
  
      // Check if the button with the text 'startquiz' is present
      cy.contains('button', 'Start Quiz').should('be.visible');
    });
  });