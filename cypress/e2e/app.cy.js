describe('App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json*', {
      statusCode: 200,
      body: {
        results: [
        ]
      }
    }).as('getArticles');
    
    cy.visit('/');
  });

  it('should display the home page', () => {
    cy.contains('NY Times Most Popular Articles', { timeout: 10000 }).should('be.visible'); 
  });

  it('should navigate to the article list page', () => {
    cy.contains('NY Times Most Popular Articles', { timeout: 10000 }).should('be.visible'); 
  });
});
