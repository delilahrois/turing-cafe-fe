describe('My first tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')

  })

  it('should allow the user to visit page and view all elements', () => {
    cy.get('h1').contains('Turing Cafe Reservations')
    cy.get('input[type=text]')
    cy.get('button').contains('Make Reservation')
    cy.get('div[class=card]')
  })

//   * Write tests covering what should be displayed on the page when the user first visits.
// * Write a test that checks that when data is put into the form, the value is reflected in that form input.
// * Write a test to check the user flow of adding a new reservation to the page.


})