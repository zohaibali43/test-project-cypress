/// <reference types = "cypress" />

import { RequestLoan } from "../support/PageObjectModel/RequestLoan";
import '../support/commands'
const AddLoan = new RequestLoan()
// Test suite
describe('Verifies Loan Request Functionalities', () =>{
    beforeEach(() => {
        cy.register()
    })

    it('Verifies Request Loan without Amount', () =>{
        AddLoan.RequestLoanWithoutAmount()
    })

    it('Verifies Request Loan with Amount', () =>{
        AddLoan.RequestLoanWithAmount()
    })
})