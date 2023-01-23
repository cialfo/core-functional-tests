// ///<reference types="cypress" />
// /// <reference types = "Cypress-iframe"/>
 import 'cypress-iframe'
 const randomDigits = () => Math.floor(1000 + Math.random() * 9000)

       describe('Basic auth', () => {

        const user = {
           email: 'hamid@cialfo.com.sg',
           password: '11111111111',
         };

         before(() => {
         cy.signIn(user);
         });
          

        
        // Open student list
         it('Open Student list', () => {
         cy.get(".sb-open-show").contains("Students").click();

         // Add a new student
        getIframeBody().find('.ng-scope').contains('Add Student').click()
        cy.wait(5000)
        getIframeBody().find("input[name=first_name]").type('Hamid');
        getIframeBody().find("input[name=last_name]").type('Student cypress Test');
        getIframeBody().find("input[name=email]").type(`hamid+cypress+${randomDigits()}@cialfo.com.sg`);
       //getIframeBody().find("input[name=mobile]").type('1-(555)-555-5555');
        getIframeBody().find("input[name=current_grade]").type('Grade 9');
        getIframeBody().find("select[name=graduation-year]").select(9);
        getIframeBody().find(".custom-radio").first().click();
        getIframeBody().find(".s-add-student-submit_button").click();
        cy.wait(5000)
       });

       // Logout the admin
       it('Logout the user', () => {
        cy.get('.profile-pic-size').click();
        cy.contains('Log Out').click();
        cy.contains('Sign In').should('exist')
    })

      })

   
 const getIframeBody = () => {
     return cy
     .get('#page-iframe')
     .its('0.contentDocument.body').should('not.be.empty')
     .then(cy.wrap)
   }