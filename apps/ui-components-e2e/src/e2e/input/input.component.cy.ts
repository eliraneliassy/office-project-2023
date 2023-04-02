describe('ui-components', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=inputcomponent--primary&args=isRequired;pattern;type:text;errorMsg;label;'
    )
  );
  it('should render the component', () => {
    cy.get('o-input').should('exist');
  });
});
