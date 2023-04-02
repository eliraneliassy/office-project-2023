describe('ui-components', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=slideshowcomponent--primary&args=slides;slidesTemplate;'
    )
  );
  it('should render the component', () => {
    cy.get('o-slide-show').should('exist');
  });
});
