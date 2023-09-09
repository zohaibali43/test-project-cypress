/// <reference types ="cypress" />
import '../support/commands'
import TransferFunds from '../support/PageObjectModel/TransferFunds'

const Transaction = new TransferFunds()
//Test suite
describe('Verifies cases for Transferring Funds', () =>{
    beforeEach(() =>{
        cy.register()
    })

    it('Verifies case when the amount is empty', () =>{
        Transaction.TransferFundsWithoutAmount()
    })

    it('Verifies case when the amount is not empty', () =>{
        Transaction.TransferFundsWithAmount()
    })
})
