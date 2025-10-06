describe('Transferências', () => {
    beforeEach(() => {
        // Arrange
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
    })
    it('Deve transferir quando informo dados e valor válidos', () => {
        // Act
        cy.realizarTransferencia('João da Silva', 'Maria Oliveira', '11')

        // Assert
        cy.validarToast('Transferência realizada!')
    })

    it('Deve exibir erro quando tentar transferir mais que 5 mil sem o token', () => {
        // Act
        cy.realizarTransferencia('João da Silva', 'Maria Oliveira', '5000.01')

        // Assert
        cy.validarToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})