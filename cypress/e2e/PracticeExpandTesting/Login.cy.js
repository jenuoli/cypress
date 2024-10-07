describe('Log-In page',function(){
it('Log In page for Automation',function(){
cy.viewport(1100,631);
cy.visit('https://practice.expandtesting.com/login');
// Incorrect username and Password
cy.get('#username').click().type('Jenu Oli');
cy.get('#password').click().type('olijenu');
cy.get('#login > .btn').click()

// Correct Username and Password
cy.wait(300);
cy.get('#username').click().type('practice');
cy.get('#password').click().type('SuperSecretPassword!');
cy.get('#login > .btn').click()
})    
})