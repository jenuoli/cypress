describe('userlogin page of OragneHrm Demo Website',function(){
    it('UserLogin',function(){
        cy.viewport(1100, 631)   
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Jenu');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Hello@123');
        cy.get('.oxd-button').click();
    })
})