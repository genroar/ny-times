describe('Article Detail Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json*', {
      statusCode: 200,
      body: {
        results: [
          {
            id: 1,
            title: 'Three Seconds to Act: Boater Recounts How Whale Capsized His Vessel',
            abstract: 'This is the abstract for Article 1',
            byline: 'Author 1',
            published_date: '2024-07-25',
            media: [
              {
                'media-metadata': [
                  { url: 'image1.jpg' },
                  { url: 'image2.jpg' },
                  { url: 'image3.jpg' }
                ]
              }
            ]
          }
        ]
      }
    }).as('getArticle');
    
    cy.visit('/article/1');
  });

  it('should display the article details correctly', () => {
    cy.wait('@getArticle');
    cy.contains('h1', 'Three Seconds to Act: Boater Recounts How Whale Capsized His Vessel').should('be.visible');
    cy.contains('p', 'This is the abstract for Article 1').should('be.visible');
    cy.contains('p', 'Author 1').should('be.visible');
    cy.contains('p', 'Published on: 2024-07-25').should('be.visible');
    cy.get('img[alt="Three Seconds to Act: Boater Recounts How Whale Capsized His Vessel"]').should('be.visible');
  });
});
