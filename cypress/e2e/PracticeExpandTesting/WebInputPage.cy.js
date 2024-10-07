describe('Web inputs page for Automation Testing Practice',function(){
    it('web input page for automation', function(){
     cy.viewport(1100, 631);   
     cy.visit('https://practice.expandtesting.com/inputs');

     cy.get('#btn-display-inputs');
     cy.get('#input-number').click().type('1');
    cy.wait(5000);
    cy.get('#input-text').click().type('Jenu Oli');
    cy.wait(5000);
    cy.get('#input-password').click().type('test@123');
    cy.wait(2000);
    cy.get('#input-date').type('2024-09-25').should('have.value', '2024-09-25');
    
    })
})