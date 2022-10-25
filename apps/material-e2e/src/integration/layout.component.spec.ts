describe('material', () => {
  beforeEach(() => cy.visit('/iframe.html?id=layoutcomponent--primary'));
  it('should render the component', () => {
    cy.get('ae-layout').should('exist');
  });
});