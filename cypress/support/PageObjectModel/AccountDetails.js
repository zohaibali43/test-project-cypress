export class AccountDetails{
     ViewGeneralDetails(){
        cy.contains("Accounts Overview").click()
        cy.get('#rightPanel > .ng-scope > .ng-scope > .title')
        .should('have.text', 'Accounts Overview') 
        //This asserts whether the account details are visible or not  
     }

     ViewSpecificDetails(){
        cy.get('.ng-scope > :nth-child(1) > .ng-binding').click()
        cy.get('#month').select("April").invoke("val")
        .should("eq", "April")
        cy.get('.button[value="Go"]').click()
     }

}

export default AccountDetails;