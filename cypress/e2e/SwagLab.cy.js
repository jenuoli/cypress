describe('userlogin page of OragneHrm Demo Website',function(){
    it('UserLogin',function(){
        cy.viewport(1100, 631)   
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // for both wrong userid and password:

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Jenu');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Hello@123');
        cy.get('.oxd-button').click();


        //for wrong username and correct password:  

    cy.wait(5000);
    
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Jenu');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('admin123');
        cy.get('.oxd-button').click();
    

        //for correct username and Incorrect password:

        cy.wait(5000);
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('admin3345');
        cy.get('.oxd-button').click();
    

        // for both correct username and password:
        
        cy.wait(5000);
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('admin123');
        cy.get('.oxd-button').click();
    
    
    })
})