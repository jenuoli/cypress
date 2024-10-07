Cypress.Commands.add('VendorLogin', () => {
    cy.visit('https://dev-vendor.damaru.sunai.xyz/sign-in');
    cy.get("input[id=':R2akvff9uba:-form-item']").click().type("prabhat_c@sunai.xyz");
    cy.get("input[placeholder='Enter your password']").click().type("Test@123");
    cy.get("button[type='submit']").click();
  });


  Cypress.Commands.add('OrangeHRMlogin', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Test with both incorrect username and password
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('admin123');
    cy.get('.oxd-button').click();
  });


  