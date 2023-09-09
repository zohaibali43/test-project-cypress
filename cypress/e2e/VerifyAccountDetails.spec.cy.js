/// <reference types = "cypress"/>
import '../support/commands'
import AccountDetails from '../support/PageObjectModel/AccountDetails';

const Account = new AccountDetails();

describe('Verifies Account generic and specific details', () =>{

    before(() => {
        cy.register();
    })

    it('Verify general account details', () =>{
        Account.ViewGeneralDetails()
        Account.ViewSpecificDetails()
    })

    // it('Verify specific account details', () => {
    //     Account.ViewSpecificDetails()
    // })
})