
// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    // you can either use cy.visit('https://url') or
    // cy.visit('/') [you can change the base url inside the cypress config]
    // more about this:
    // https://docs.cypress.io/guides/references/configuration#cypress-json


    cy.visit('/') // visits the baseUrl
  })

  it('Open Image Editor', () => {
    
    // open first product
    cy.get('.btn-primary').first().click({force: true})

    // wait 1 second to call the api
    cy.wait(1000)

    // check if opened product id is equal to 1
    cy.url().should('include', '/product-detail/1')

    cy.get('.d-flex label').first().children('span').invoke('text').then((text) => {
      expect(text.trim()).equal('1')
    });


  })

})
