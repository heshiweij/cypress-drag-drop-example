/// <reference types="cypress" />

describe("test", () => {

  it('works (simply)', () => {
    cy.visit('https://angular-oxkc7l-zirwfs.stackblitz.io/');

    cy.get('button', {timeout: 30000}).click();

    cy.get('#cdk-drop-list-1 > div:nth-child(2)').then( draggable => {
      cy.get('#cdk-drop-list-1 > div:nth-child(1)').then( droppable => {
        const coords = droppable[0].getBoundingClientRect()
        draggable[0].dispatchEvent(new MouseEvent('mousedown'));
        draggable[0].dispatchEvent(new MouseEvent('mousemove', {clientX: 10, clientY: 0}));
        draggable[0].dispatchEvent(new MouseEvent('mousemove', {
          clientX: coords.x+10,
          clientY: coords.y+10  // A few extra pixels to get the ordering right
        }));
        draggable[0].dispatchEvent(new MouseEvent('mouseup'));
      } )
    } )
  });
});
