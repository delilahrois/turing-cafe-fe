describe('Testing first user flows', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')

  })

  it('should allow the user to visit page and view all elements', () => {
    cy.get('h1').contains('Turing Cafe Reservations')
    cy.get('input[type=text]')
    cy.get('button').contains('Make Reservation')
    cy.get('div[class=card]')
  })

  it('should be able to keep track of form data', () => {

    cy.get('input[id=name-input').type('Delilah').contains('Delilah')
    
  })

  it('should be able to submit a new reservation to the page', () => {

    cy.get('input[id=name-input]').type('Delilah')
    cy.get('input[id=date-input]').type('12/3')
    cy.get('input[id=time-input]').type('7:00')
    cy.get('input[id=guests-input]').type('3')
    cy.get('button').contains('Make Reservation').click()

    cy.get('div[class=card]').contains('<h3>Delilah</h3>')

  })

  // it('should display new reservation in the grid', () => {

  //   cy.get('div[class=card]').contains('<h3>Delilah</h3>')

  // })

//   * Write tests covering what should be displayed on the page when the user first visits.
// * Write a test that checks that when data is put into the form, the value is reflected in that form input.
// * Write a test to check the user flow of adding a new reservation to the page.


})