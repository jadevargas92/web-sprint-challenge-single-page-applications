
describe('Visits Site and Tests Form', function () {

        it('Visits the Site', function() {
            cy.visit('http://localhost:3000/')
        })
        it('Clicks on Order Now', function() {
            cy.get(`a.nav-item`).contains('Order Now').click()
        })

        it('Types into Name Box', function () {
            cy.get(`input[name='name']`).type('Jade Vargas')
        })
        it('Selects Multiple Toppings', function () {
            cy.get(`input[name='pepperoni']`).click()
            cy.get(`input[name='mushrooms']`).click()
        })
        it('Selects a pizza size from the dropdown', function () {
            cy.get(`select[name='size']`).select('large')
        })
        it('Types into Instructions Box', function () {
            cy.get(`input[name='instructions']`).type('Test Instructions - Make the pizza extra good!')
        })
        it('Submits the Form', function () {
            cy.get('button').click()
        })
    })