/// <reference types = "cypress"/>
import RegisterPage from "../support/PageObjectModel/RegisterPage";
const data = require('../fixtures/example.json')

const reg = new RegisterPage()
describe("Verify Register Functionality", () =>{

    it("Registers User with valid data", () =>{
        
        var MyName = reg.GenerateUsername() // new variable
        reg.ClickRegister()
        reg.EnterFirstName(MyName)
        reg.EnterLastName(data[2].lastname)
        reg.EnterAddress(data[2].address)
        reg.EnterCity(data[2].city)
        reg.EnterState(data[2].state)
        reg.EnterZipcode(data[2].zipcode)
        reg.EnterPhone(data[2].Phone)
        reg.EnterSSN(data[2].ssn)
        reg.EnterUsername(MyName)
        reg.EnterPassword(data[0].password)
        reg.ConfirmPassword(data[0].password)
        reg.SubmitRegisterForm()
        cy.url().should('eq','https://parabank.parasoft.com/parabank/overview.htm')
    })

    it("Registers User with invalid data", () =>{

        reg.ClickRegister()
        reg.EnterFirstName("Zohaib")
        reg.EnterLastName("Ali")
        reg.EnterAddress("Devsinc Tower, Ghazi Road")
        reg.EnterCity("Lahore")
        reg.EnterState("  ")
        reg.EnterZipcode("54810")
        reg.EnterPhone("  ")
        reg.EnterSSN("4452")
        //reg.EnterUsername("Maham")
        reg.EnterPassword("abc123")
        reg.ConfirmPassword("abc123")
        reg.SubmitRegisterForm()
        cy.title().should('not have','ParaBank | Accounts Overview')
    })
})