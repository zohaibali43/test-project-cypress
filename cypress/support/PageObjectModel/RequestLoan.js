export class RequestLoan{

    RequestLoanWithAmount(){
        cy.contains('Request Loan').click()
        cy.wait(2500)
        cy.get('#amount[ng-model="loanRequest.amount"]').type('500')
        cy.get('#downPayment[ng-model="loanRequest.downPayment"]').type('45')
        cy.get('.button[value="Apply Now"]').click()
        cy.contains('Loan Request Processed').should('be.visible', 'Loan Request Processed')
        cy.contains('Status: Approved').should('be.visible', 'Status: Approved')
    }
    RequestLoanWithoutAmount(){
        cy.contains('Request Loan').click()
        cy.wait(2500)
        cy.get('.button[value="Apply Now"]').click()
        cy.contains('Error!').should('be.visible', 'Error')
    }
}
export default RequestLoan;