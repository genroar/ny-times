NY Times Most Popular Articles App

Overview
This application displays the most popular articles from the New York Times. Users can view a list of articles on the homepage and click on any article to view its detailed information. The application is built using React and JavaScript, and uses Cypress for end-to-end testing.

Features
Homepage: Displays a list of popular articles.
Article Detail: Shows detailed information about a selected article.
Routing: Utilizes React Router for navigation.
Testing: Includes end-to-end tests with Cypress.
Installation
Prerequisites
Ensure you have Node.js (version 14 or later) and npm installed on your machine.

The application will be available at http://localhost:3000.

Running Tests
Unit and Integration Tests
To run unit and integration tests, use:

npm test
End-to-End Tests
To run end-to-end tests with Cypress:

Open Cypress Test Runner:

npm run cypress:open
Run Tests:

In the Cypress Test Runner, select the test files you want to run.

Project Structure
src/components/: Contains React components.
src/container/: Container
src/App.js: Main application component with routing.
src/index.js: Entry point for the React application.
cypress/e2e/: Contains Cypress end-to-end tests.
Assets/: Static assets and HTML template.