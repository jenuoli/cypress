Cypress.Commands.add('VendorLogin', () => {
    cy.visit('https://dev-vendor.damaru.sunai.xyz/sign-in');
    cy.get("input[id=':R2akvff9uba:-form-item']").click().type("prabhat_c@sunai.xyz");
    cy.get("input[placeholder='Enter your password']").click().type("Test@123");
    cy.get("button[type='submit']").click();
  });


  