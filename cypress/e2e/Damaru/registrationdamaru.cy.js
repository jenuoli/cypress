describe('Vendor Registration after otp', function() {
    it('Vendor Registration', function() {
         
       cy.viewport(1100, 631)

       cy.visit('https://dev-vendor.damaru.sunai.xyz/sign-in');
       cy.get('#\\:R2akvff9uba\\:-form-item').click().type('prabhat_c@sunai.xyz');
       cy.get('#\\:R3akvff9uba\\:-form-item > .relative > .flex').click().type('Test@123');
       cy.get('.bg-primary').click();
       cy.wait(5000);
       cy.get(':nth-child(2) > .rounded-lg > .inline-flex > span').click();
       cy.get('#radix-\\:rt\\:-trigger-expired').click();
       cy.wait(20000);
        cy.get('[style="transform: translate3d(0px, 0px, 0px);"] > :nth-child(1)')
    })

   })