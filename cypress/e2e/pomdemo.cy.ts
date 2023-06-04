import { LoginPage } from "../pages/login";
const loginPage = new LoginPage;

describe('POM Demo', function()  {

    this.beforeEach(function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    })

it('Login Test 1', function() {
        loginPage.enterUsername("Admin");
        loginPage.enterpassword("admin123");
        loginPage.clickOnLoginButton();
    } )
    
  it('Verify Login Failed Test 2',function() {
    loginPage.enterUsername("Admin");
    loginPage.enterpassword("admin123");
    loginPage.clickOnLoginButton();
    loginPage.verifyInvalidAlert();
    }
  )
})