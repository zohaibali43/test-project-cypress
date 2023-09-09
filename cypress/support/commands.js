// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const data = require('../fixtures/example.json')
import RegisterPage from './PageObjectModel/RegisterPage'
const reg = new RegisterPage()

Cypress.Commands.add('register', () =>{
    var MyName = reg.GenerateUsername()
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
})