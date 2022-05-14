/// <reference types="cypress" />

context('Cliente', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
  
    it('ao acessar a home, deve conter uma lista com 10 clientes', () => {
      cy.get('tbody tr').should('to.have.length', 10)
      cy.get('tbody tr td').contains("sarah1")
      cy.get('tbody tr td').contains("sarah3")
      cy.get('h1').contains("Sarah")
      cy.get('body p').contains("Welcome")
    })
})