describe('Vendor Registration after otp', function() {
    it('Vendor Registration', function() {
         
       cy.viewport(1100, 631)
cy.VendorLogin();
cy.wait(5000);
cy.get('.justify-end.gap-2 > :nth-child(2)').click();


    })
})