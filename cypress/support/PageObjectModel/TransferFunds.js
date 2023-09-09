export class TransferFunds{

    TransferFundsWithoutAmount(){
        cy.contains("Transfer Funds").click()
        cy.wait(2500)
        cy.get('.button[value=Transfer]').click()
        cy.contains('The amount cannot be empty.').should('be.visible','The amount cannot be empty.')
    }
    
    TransferFundsWithAmount(){
        cy.contains("Transfer Funds").click()
        cy.wait(2500)
        cy.get('#amount').type('500')
        cy.get('.button[value=Transfer]').click()
        cy.contains('Transfer Complete!').should('be.visible','Transfer Complete!')
    }
}

export default TransferFunds;