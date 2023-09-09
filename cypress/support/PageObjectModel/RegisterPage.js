export class RegisterPage{
    ClickRegister(){
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        cy.contains("Register").click()
    }

    GenerateUsername(){
      const random = Math.random()*100
      let num = Math.round(random)
      var x = "SuperAdmin"
      var UniqueName = x+num
      return(UniqueName)
    }
     EnterFirstName(value){
        cy.get('input[id="customer.firstName"]')
        .clear()
        .type(value)

     }
     EnterLastName(value){
        const field = cy.get('input[id="customer.lastName"]')
        field.clear()
        field.type(value)
        return this

     }
    
     EnterAddress(value){
        const field = cy.get('input[id="customer.address.street"]')
        field.clear()
        field.type(value)
        return this

     }
     EnterCity(value){
        const field = cy.get('input[id="customer.address.city"]')
        field.clear()
        field.type(value)
        return this

     }
     EnterState(value){
        const field = cy.get('input[id="customer.address.state"]')
        field.clear()
        field.type(value)
        return this

     }
     EnterZipcode(value){
        const field = cy.get('input[id="customer.address.zipCode"]')
        field.clear()
        field.type(value)
        return this

     }
     EnterPhone(value){
        const field = cy.get('input[id="customer.phoneNumber"]')
        field.clear()
        field.type(value)
        return this

     }
     EnterSSN(value){
        const field = cy.get('input[id="customer.ssn"]')
        field.clear()
        field.type(value)
        return this
     }
     EnterUsername(value){
        const field = cy.get('input[id="customer.username"]')
        field.clear()
        field.type(value)
        return this
    }
    EnterPassword(value){
        const field = cy.get('input[id="customer.password"]')
        field.clear()
        field.type(value)
        return this
    }
    ConfirmPassword(value){
        const field = cy.get('input[id="repeatedPassword"]')
        field.clear()
        field.type(value)
        return this
    }
    SubmitRegisterForm(){
        cy.get('input[value="Register"]').click()
    }
}

export default RegisterPage;