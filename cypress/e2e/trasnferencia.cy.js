describe('Transferências', () => {
    beforeEach(() => {
        // Arrange
        cy.visit('/')
        cy.fixture('credenciais').then(credenciais => {
            cy.get('#username').click().type(credenciais.valida.usuario)
            cy.get('#senha').click().type(credenciais.valida.senha)
        })
        cy.contains('button', 'Entrar').click()
    })
    it('Deve transferir quando informo dados e valor válidos', () => {
        // Act
        // cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem')
        // cy.get('@campo-conta-origem').click().contains('João da Silva').click()
        cy.get('label[for="conta-origem"]')
            .parent()
            .click()
            .contains('João da Silva')
            .click()

        cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino')
        cy.get('@campo-conta-destino').click().contains('Maria Oliveira').click()
        cy.get('#valor').click().type('11')
        cy.contains('button', 'Transferir').click()

        // Assert
        cy.get('.toast').should('have.text', 'Transferência realizada!')
    })
})