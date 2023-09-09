/// <reference types = "cypress"/>
import {LoginPage} from "../support/PageObjectModel/LoginPage";
const data = require ('../fixtures/example.json')

const login = new LoginPage()

describe('Verifies login and logout functionality', () => {

    beforeEach(() => {
        login.OpenWebsite()

    })

    it('Logins website-with valid data', () =>{
        login.EnterUsername(data[0].username)
        login.EnterPassword(data[0].password)
        login.ClickLogin()
        cy.url().should('include','overview.htm')
    })

    it('Logins website - with invalid data', () =>{
        login.EnterUsername(data[1].username)
        login.EnterPassword(data[1].password)
        login.ClickLogin()
        cy.url().should('not contain','overview.htm')

    })

})