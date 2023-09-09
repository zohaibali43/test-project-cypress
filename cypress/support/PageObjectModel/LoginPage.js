export class LoginPage
{
    
    OpenWebsite()
    {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
    }

    EnterUsername(value)
    {
        const field = cy.get('input[name="username"]')
        field.clear().type(value)
    
    }

    EnterPassword(value){
        const field = cy.get('input[name="password"]')
        field.clear().type(value)
        
    }

    ClickLogin(){
        cy.get('input[value="Log In"]').click();

    }
}

export default LoginPage

