describe('User Login Page of OrangeHRM Demo Website', function (){
    it('UserLogin', function (){
        cy.viewport(1100, 631);
        
        // Visit the login page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // Test with both incorrect username and password
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Jenu');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Hello@123');
        cy.get('.oxd-button').click();

        cy.wait(5000);

        // Test with incorrect username and correct password
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Jenu');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('admin123');
        cy.get('.oxd-button').click();

        cy.wait(5000);

        // Test with correct username and incorrect password
        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('admin3345');
        cy.get('.oxd-button').click();
        cy.wait(5000);

        // Test with correct username and password

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('admin123');
        cy.get('.oxd-button').click();
        cy.wait(5000);

  
        
        function smoothScrollTo(yPos, duration = 2000) {
            cy.window().then((win) => {
              const start = win.scrollY || win.pageYOffset;
              const distance = yPos - start;
              const startTime = performance.now();
      
              function scrollStep(currentTime) {
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / duration, 1); // Calculate progress
                const easeInOut = progress < 0.5
                  ? 2 * progress * progress
                  : -1 + (4 - 2 * progress) * progress; // Easing function for smooth scroll
                win.scrollTo(0, start + distance * easeInOut);
                if (timeElapsed < duration) {
                  requestAnimationFrame(scrollStep);
                }
              }
      
              requestAnimationFrame(scrollStep);
            });
          }
      
          // Perform smooth scroll down by 2000px (adjust as needed)
          smoothScrollTo(2000); // Scroll down to 2000px from the top
      
          // Optionally, you can perform actions or assertions after scrolling
          cy.wait(2000); // Wait for a short period to ensure the scroll effect completes
      
        
          
           
            });
          });
          
   