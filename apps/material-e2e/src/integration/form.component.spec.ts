describe('material', () => {
  beforeEach(() => cy.visit('/iframe.html?id=formcomponent--primary'));
  it('should render the component', () => {
    cy.get('ae-form').should('exist');
  });
});