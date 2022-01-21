/// <reference types="cypress" />

it('should fill left side the same as right side', () => {
    cy.visit('/teacher');

    cy.get('[data-testid="inputLeft"]').clear();
    cy.get('[data-testid="inputLeft"]').type('test');
    cy.get('[data-testid="inputRight"]').should('have.value', 'test');
   

   
});

it('should delete user', () => {
    cy.visit('/contact');

    const first = cy.get('[data-testid="todo-item"]').first().within(() => {
       cy.get('button').click();
    })
    

    // cy.get('#todo-item-6196b63d862c02c831884439 > [data-testid="button"]').click();
   
})