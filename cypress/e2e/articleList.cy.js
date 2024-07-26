describe('Article List Page', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json*', {
        statusCode: 200,
        body: {
          results: [
            {
              id: 1,
              title: 'Article 1',
              abstract: 'Abstract for Article 1',
              byline: 'Author 1',
              published_date: '2024-07-25',
              media: [
                {
                  'media-metadata': [
                    { url: 'image1.jpg' }
                  ]
                }
              ]
            }
          ]
        }
      }).as('getArticles');
  
      cy.visit('/');
    });
  
    it('should display the list of articles', () => {
      cy.wait('@getArticles');
  
      cy.contains('Article 1').should('be.visible');
    });
  
    it('should navigate to article detail page on clicking an article', () => {
      cy.wait('@getArticles');
      cy.contains('Read More').click();
      cy.url().should('include', '/'); 
      cy.contains('Article 1').should('be.visible');
    });
  });
  