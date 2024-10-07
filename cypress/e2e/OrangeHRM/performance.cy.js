describe('PerformanceSectionOfOrangeHRM', function() {
  
  // Handle uncaught exceptions to prevent Cypress from failing the test
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });

  require('cypress-xpath');
  
  it('Performation Section Of OrangeHRM', function() {
    cy.OrangeHRMlogin(); // Custom login command for OrangeHRM

    // Navigating through the performance section using Xpath
    //cy.xpath("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[7]").click();
    cy.xpath("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[1]").click();
    
    // You can add more actions or assertions here as needed
    // Example:
    // cy.get('.oxd-button--ghost').click();
    // cy.get('.oxd-autocomplete-text-input > input').click().type('A8DCo 4Ys 010Z');
    cy.wait(1000);
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click();
    cy.get('.oxd-autocomplete-text-input > input').click();
    cy.wait(1000);
    cy.get('.oxd-autocomplete-text-input > input').type('');
    cy.get('.oxd-autocomplete-text-input > input').type('Jenu Oli');
  });
});
