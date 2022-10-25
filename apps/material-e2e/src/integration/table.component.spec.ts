describe('material', () => {
  beforeEach(() => cy.visit('/iframe.html?id=tablecomponent--primary'));
  it('should render the component', () => {
    cy.get('ae-table').should('exist');
  });
});