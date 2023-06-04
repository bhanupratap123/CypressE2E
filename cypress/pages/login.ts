export class LoginPage{


    username_textbox="[name='username']";
    password_textbox="[type='password']";
    login_button = "[type='submit']";
    invalid_credential = "[class*='alert-content-text']"

    enterUsername(username:string){
        cy.get(this.username_textbox).type(username);
    }

    enterpassword(password:string){
        cy.get(this.password_textbox).type(password);
    }

    clickOnLoginButton(){
        cy.get(this.login_button).click();
    }

    verifyInvalidAlert(){
        cy.get(this.invalid_credential).should('have.text',"Invalid credentials")
    }

}