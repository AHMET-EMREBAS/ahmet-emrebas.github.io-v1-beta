describe('material', () => {
  beforeEach(() => cy.visit('/iframe.html?id=inputcomponent--primary&args=options;fc;fg;'));
  it('should render the component', () => {
    cy.get('ae-input').should('exist');
  });
});